function VerticalText({ text }) {
    return (
        <div
            id="sticky-container"
            className="sticky top-20 text-center"
        >
            <span
                id="sticky-element"
                className="sticky top-12 font-mono tracking-widest text-xl -ml-2 md:ml-0 md:text-5xl -z-10 text-slate-300/30 uppercase"
                style={{ writingMode: "vertical-lr" }}
            >
                {text}{"\\\\"}
            </span>
        </div>
    )
}

export default VerticalText


