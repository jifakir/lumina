import Accordion from "./Accordion";



const Faq = () => {


    return (
        <div className="container mx-auto mt-24 pb-14">
            <div className="px-32">
                <h1 className="text-56px text-white text-center pb-14">Frequently Asked Questions</h1>
                <div className="">
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                </div>
            </div>
        </div>
    )
};

export default Faq;