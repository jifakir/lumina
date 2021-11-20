


const Roadmap = () => {

    return (
        <div className="container mx-auto mt-24 px-80 pb-36">
            <h1 className="text-center text-white text-5xl font-semibold">Roadmap</h1>
            <div className="w-full mt-24">
                <div className="w-1/2 relative pr-11 border-r">
                    <div className="relative bg-secondary py-5 pl-6 pr-8 transform -translate-y-1/2">
                        <div className="absolute -right-14 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue rounded-full bg-opacity-70 flex justify-center items-center">
                            <div className="w-4 h-4 bg-blue rounded-full bg-opacity-50 flex justify-center items-center">
                                <div className="w-2 h-2 bg-white rounded-full">
                                </div>
                            </div>
                        </div>
                        <h2 className="text-right text-white">Presale</h2>
                        <div className="">
                            <div className="flex justify-between">
                                <h4 className="text-blue">Private Sales</h4>
                                <p className="text-white">2000000 LUMIN</p>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="text-blue">Date</h4>
                                <p className="text-white">TBA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Roadmap;