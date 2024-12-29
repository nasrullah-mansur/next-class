"use client";

export default function error(errors) {
    console.log(errors);

    return (
        <div>
            <button onClick={() => errors.reset()}>Reset</button>
        </div>
    );
}
