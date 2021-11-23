import RoadCard from "./RoadCard";



const Roadmap = () => {

    return (
        <div className="container mx-auto mt-14 md:mt-24 px-3 md:px-80 pb-16 md:pb-36">
            <h1 className="text-center text-white text-40px md:text-56px font-bold pb-12 mb-20 md:mb-0">Roadmap</h1>
            <div className="w-full mt-10 md:mt-24">
                <div className="w-0 md:w-1/2 ml-2 md:ml-0  h-full border-r-2 border-gray-600">
                    {
                        Array(6).fill('').map((v, idx) => <RoadCard key={idx} index={idx} />)
                    }
                </div>
            </div>
        </div>
    )
};
export default Roadmap;