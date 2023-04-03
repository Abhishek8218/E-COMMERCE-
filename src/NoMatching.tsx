const NoMatching = () => {
  return (

    <div className="flex flex-col self-center md:p-20" >
      <div className="px-2 flex flex-col justify-center self-center">
      <h1 className=" text-center text-2xl md:text-5xl font-bold"> No Matching Results Found!!! </h1>
      <h2 className="text-gray-500 text-center mt-3 md:text-3xl">Try Entering Some Other Keywords...   </h2>
        </div>
      <img className="mt-3 " src="https://cdn.dribbble.com/userupload/2641500/file/original-b2b4da3f25a13ff275d03cd646d1fec3.png?compress=1&resize=1024x768"/>
   </div> 
      
  );
};

export default NoMatching;