import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white/20 p-4 rounded-xl flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="flex-1">
        <label htmlFor={amountInputId} className="text-white/80 text-sm font-medium mb-2 block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-transparent text-white text-lg font-medium py-2 px-3 rounded-lg border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all placeholder-white/40 disabled:opacity-75"
          type="number"
          placeholder="0.00"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      <div className="w-32">
        <p className="text-white/80 text-sm font-medium mb-2">Currency</p>
        <select
          className="w-full rounded-lg px-3 py-2 bg-white/10 border border-white/20 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all appearance-none cursor-pointer hover:bg-white/20"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="bg-gray-800 text-white">
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;