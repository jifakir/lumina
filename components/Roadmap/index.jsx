import RoadCard from "./RoadCard";



const Roadmap = () => {

    return (
        <div className="container mx-auto mt-24 px-80 pb-36">
            <h1 className="text-center text-white text-56px font-bold pb-12">Roadmap</h1>
            <div className="w-full mt-24">
                <div className="w-1/2  h-full border-r-2 border-gray-600">
                    {
                        Array(6).fill('').map((v, idx) => <RoadCard key={idx} index={idx} />)
                    }
                </div>
            </div>
        </div>
    )
};
export default Roadmap;