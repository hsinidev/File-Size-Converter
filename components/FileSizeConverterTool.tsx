
import React, { useState, useMemo } from 'react';
import { FileSizeUnit, ConversionStandard } from '../types';
import { convertFileSize, convertToBytes } from '../lib/conversion';

const FileSizeConverterTool: React.FC = () => {
    const [amount, setAmount] = useState<string>('1');
    const [fromUnit, setFromUnit] = useState<FileSizeUnit>(FileSizeUnit.GB);
    const [toUnit, setToUnit] = useState<FileSizeUnit>(FileSizeUnit.MB);
    const [standard, setStandard] = useState<ConversionStandard>(ConversionStandard.BINARY);
    
    const units = Object.values(FileSizeUnit);
    const standards = Object.values(ConversionStandard);

    const handleSwap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
    };

    const numericAmount = useMemo(() => parseFloat(amount) || 0, [amount]);

    const result = useMemo(() => {
        if (numericAmount === 0) return 0;
        return convertFileSize(numericAmount, fromUnit, toUnit, standard);
    }, [numericAmount, fromUnit, toUnit, standard]);

    const bytesValue = useMemo(() => {
        if (numericAmount === 0) return 0;
        return convertToBytes(numericAmount, fromUnit, standard);
    }, [numericAmount, fromUnit, standard]);

    const bitsValue = useMemo(() => bytesValue * 8, [bytesValue]);

    const formatResult = (value: number) => {
        if (value === 0) return '0';
        if (value < 0.0001 && value > 0) return value.toExponential(4);
        return value.toLocaleString('en-US', { maximumFractionDigits: 4 });
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl shadow-indigo-500/20 border border-purple-500/30 p-6 md:p-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                File Size Converter
            </h1>
            <p className="text-center text-slate-400 mb-8">Your friendly tool for digital storage conversions.</p>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end mb-6">
                <div className="flex flex-col">
                    <label htmlFor="fromUnit" className="text-sm font-medium text-slate-300 mb-2">From</label>
                    <select
                        id="fromUnit"
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value as FileSizeUnit)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition appearance-none bg-no-repeat bg-right-4"
                        style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em'}}
                    >
                        {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
                    </select>
                </div>

                <button onClick={handleSwap} className="p-2.5 bg-slate-700/50 hover:bg-purple-600/50 rounded-full text-slate-300 hover:text-white transition-colors duration-300" aria-label="Swap units">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </button>

                <div className="flex flex-col">
                    <label htmlFor="toUnit" className="text-sm font-medium text-slate-300 mb-2">To</label>
                    <select
                        id="toUnit"
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value as FileSizeUnit)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition appearance-none"
                         style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em'}}
                    >
                        {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
                    </select>
                </div>
            </div>

            <div className="flex flex-col mb-6">
                <label htmlFor="amount" className="text-sm font-medium text-slate-300 mb-2">Amount</label>
                <input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                />
            </div>
            
            <div className="mb-8">
                <label className="text-sm font-medium text-slate-300 mb-3 block text-center">Conversion Standard</label>
                <div className="flex justify-center bg-slate-800/50 border border-slate-700 rounded-lg p-1 max-w-sm mx-auto">
                    {standards.map(std => (
                        <button
                            key={std}
                            onClick={() => setStandard(std)}
                            className={`w-1/2 py-2 rounded-md text-sm font-semibold transition-colors ${standard === std ? 'bg-purple-600 text-white' : 'text-slate-300 hover:bg-slate-700/50'}`}
                        >
                            {std}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 p-6 rounded-xl border border-slate-700 text-center">
                <p className="text-slate-300 text-lg">Converted Amount</p>
                <p className="text-4xl md:text-5xl font-bold my-2 break-words bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-cyan-300 to-blue-300">
                    {formatResult(result)}
                </p>
                <p className="font-semibold text-slate-300 text-lg">{toUnit}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800">
                <h3 className="text-center text-slate-300 font-semibold mb-4">Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                        <p className="text-sm text-slate-400">Value in Bytes</p>
                        <p className="text-xl font-mono break-words">{formatResult(bytesValue)}</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                        <p className="text-sm text-slate-400">Value in Bits</p>
                        <p className="text-xl font-mono break-words">{formatResult(bitsValue)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileSizeConverterTool;
