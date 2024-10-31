import profile from "../../assets/image/profile3.jpg"

const Header = () => {
    return (
        <div className="flex justify-between p-4 mx-2 border-b-2">
            <h1 className="text-4xl font-bold">Knowledge cafe</h1>
            <img className="w-[50px] h-[50px] rounded-full" src={profile} alt="" />
        </div>
    );
};

export default Header;