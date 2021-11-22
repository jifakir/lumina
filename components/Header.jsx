import Image from 'next/image';
import logo from '../assets/logo.svg';

const Header = () => {
    
    const menuItems = ['Whitepaper', 'Token', 'Economy', 'Roadmap', 'Ecosystem'];

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center py-10 pl-10">
                <div className="">
                    <Image src={logo} alt="logo" />
                </div>
                <div className="">
                    {
                        menuItems.map((v, idx) => <a className="text-white transition duration-500 ease-in-out font-primary px-3 cursor-pointer hover:text-blue hover:font-semibold" key={idx}>{v}</a>)
                    }
                </div>
                <div className="">
                    <a href="" className="px-7 transition duration-500 ease-in-out py-4 border border-opacity-50 rounded-full text-white text-sm hover:bg-blue">ICON? APPLY FOR IDO</a>
                </div>
            </div>
        </div>
    )
};
export default Header;