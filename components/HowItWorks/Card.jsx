


const Card = () => {

    return (
        <div className="bg-white px-7 py-16">
            <div className="flex justify-between items-center">
                <h1 className="uppercase f-primary text-5xl">FOR <span className="font-semibold">ICONS</span></h1>
                <button className="uppercase border border-blue px-5 py-2 text-blue text-xs">APPLY FOR IDO</button>
            </div>
            <ul className="">
                {
                    Array(3).fill('').map((v, idx) => (
                        <li key={idx} className="flex items-center py-8 border-b">
                            <div className="w-12 h-14 rounded-3xl bg-blue text-white text-2xl px-5 mr-4 flex justify-center items-center">
                                <span className="font-semibold">0{idx+1}</span>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-2xl">Apply for IDO</h3>
                                <p className="">Fill out the info form to join the our list of something and do something</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};


export default Card;