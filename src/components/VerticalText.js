function VerticalText({ number, text }) {
    return (
        <div
            id="sticky-container"
            className="sticky flex flex-col top-20 text-center font-mono"
        >
            {/* <span className="sticky top-0 mb-6 text-teal-300/60 text-xl">.01</span> */}
            <span
                id="sticky-element"
                className="sticky top-12 font-mono tracking-widest text-xl -ml-2 md:ml-0 md:text-5xl -z-10 text-slate-300/30 uppercase"
            // style={{ writingMode: "vertical-lr" }}
            >
                {number ? <span className="text-teal-300/60 text-xl">{".0"}{number}</span> : null}
                <span className="mt-6" style={{ writingMode: "vertical-lr" }}>
                    {text}{" \\\\"}
                </span>
            </span>
        </div>
    )
}

export default VerticalText



{/* <div
id="sticky-container"
className="sticky flex flex-col top-20 text-center font-mono"
>
<span className="sticky top-0 mb-6 text-teal-300/60 text-xl">.01</span>
<span
    id="sticky-element"
    className="sticky top-12 font-mono tracking-widest text-xl -ml-2 md:ml-0 md:text-5xl -z-10 text-slate-300/30 uppercase"
    style={{ writingMode: "vertical-lr" }}
>
    <span style={{ writingMode: "vertical-lr" }}>
        {text}{"\\\\"}
    </span>
</span>
</div>
) */}