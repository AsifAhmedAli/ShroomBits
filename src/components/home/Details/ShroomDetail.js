
export default function ShroomDetail({ id, text, image, gridMobile }) {
    return (
        <article className="shroom_grid classes">
            {gridMobile ?
                (
                    <>
                        <div className="shroom_image">
                            <img src={image} alt={id} />
                        </div>
                        <div className="shroom_text">
                            {text}
                        </div>
                    </>
                )
                : id % 2 === 0 ? (
                    <>
                        <div className="shroom_text">
                            {text}
                        </div>
                        <div className="shroom_image">
                            <img src={image} alt={id} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="shroom_image">
                            <img src={image} alt={id} />
                        </div>
                        <div className="shroom_text">
                            {text}
                        </div>
                    </>
                )
            }

        </article>
    )
}
