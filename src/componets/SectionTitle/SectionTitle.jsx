/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHading}) => {
    return (
        <div className="my-4 text-center sm:w-full  lg:w-4/12 mx-auto ">
            <p className="text-yellow-500 mb-2">--- {subHading} ---</p>
            <p className="text-4xl border-y-4 py-4 uppercase">{heading}</p>
        </div>
    );
};

export default SectionTitle;