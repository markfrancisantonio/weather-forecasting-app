function Temperature ({ value, unit }) {
    const displayValue = unit === "imperial" ? (value * 9) / 5 + 32 : value;

    const rounded = Math.round(displayValue);

    const symbol = unit === "metric" ? "°C" : "°F";

    return (
        <span>
            {rounded}{symbol}
        </span>
    );
}

export default Temperature;