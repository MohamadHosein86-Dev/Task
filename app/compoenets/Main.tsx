import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";

const teams = [
  { name: "Online", performance: 100, color: "bg-red-500", avreg: "50%" },
  { name: "Offline", performance: 55, color: "bg-blue-600", avreg: "30%" },
  { name: "Events", performance: 0, color: "bg-red-300", avreg: "20%" }
];

export default function MainSec() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto">
        {/*  */}
        <div className="flex justify-between bg-white rounded-bl-3xl shadow-sm rounded-br-3xl py-4 px-8 items-center mb-8">
          <h1 className="text-xl font-semibold text-[#0F296D]">Welcome to athletes</h1>
          <div className=" flex items-center gap-2 ">
            <div className=" flex items-center gap-3 px-4 w-100 py-1.5 border-1 border-[#CCCCCCBD] rounded-lg ">
              <FaSearch color="#CCCCCCBD" />
              <input placeholder="search" className=" border-none outline-none " type="text" />
            </div>
            <img className=" mx-5" src="header\Group2870.svg" alt="" />
            <img src="header\Group2869.svg" alt="" />
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white p-4 rounded-4xl shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <img src="main\Group2913.png" alt="" /> <span className=" w-1 h-20 text-[#E5E5E5] "></span>
            <span className=" h-20 w-[2px] mr-10 bg-gray-100 "> </span>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">534</h3>
              <p className=" text-[#00000066] text-sm font-semibold ">Coaches</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-4xl shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <img src="main\Group2912.png" alt="" />
            <span className=" h-20 w-[2px] ml-8 mr-8 bg-gray-100 "> </span>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">9.7k</h3>
              <p className=" text-[#00000066] text-sm font-semibold ">kids</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-4xl shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <img src="main\Group2911.png" alt="" />
            <span className=" h-20 w-[2px] mr-10 ml-7 bg-gray-100 "> </span>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">50m</h3>
              <p className=" text-[#00000066] text-sm font-semibold ">Revenue</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="   flex gap-8">
          <div className="space-y-6  relative ">
            <div className="bg-white p-6 rounded-4xl  [box-shadow:0_0_15px_rgba(0,0,0,0.1)] ">
              <h3 className="text-lg font-semibold mb-5 text-gray-800">Today's Status</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-[#F9F9F9] py-5 px-5 rounded-xl ">
                  <div className="text-2xl font-bold text-gray-800 ">8.7K</div>
                  <div className=" mt-1.55 text-sm text-gray-500">Total Present</div>
                </div>
                <div className="text-center bg-[#F9F9F9] py-5 px-5 rounded-xl ">
                  <div className="text-2xl font-bold text-gray-800 ">98</div>
                  <div className=" mt-1.55 text-sm text-gray-500">Registrations</div>
                </div>
                <div className="text-center bg-[#F9F9F9] py-5 px-5 rounded-xl ">
                  <div className="text-2xl font-bold text-gray-800 ">30</div>
                  <div className=" mt-1.55 text-sm text-gray-500">Today's Session</div>
                </div>
              </div>

              <div className="w-full max-w-md relative bg-[#F9F9F9]  rounded-xl flex items-center overflow-hidden">
                {/* نوار رنگی سمت چپ */}
                <div className=" w-5 absolute bg-[#F1554C] h-full"></div>

                {/* متن‌ها */}
                <div className="flex justify-between  items-center w-full ml-8 p-6">
                  <h2 className="text-xl font-semibold text-gray-700">Today’s WOD</h2>
                  <div className="text-right">
                    <p className="text-xl font-bold text-blue-900">Filthy Fifty</p>
                    <p className="text-sm text-center text-gray-500">Mecton</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white absolute  -rotate-6 left-7  bottom-6 rounded-4xl [box-shadow:0_0_15px_rgba(0,0,0,0.1)] p-7 w-124  ">
              <div className="relative">
                <div className="mb-8 flex justify-between  items-center w-full  ">
                  <h2 className="  text-lg font-bold text-gray-800 mb-2">Revenue Generated</h2>
                </div>
                <div className="flex    ">
                  {/* Teams List */}
                  <div className="space-y-6  ">
                    {teams.map((team, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className={`w-6 h-6 rounded ${team.color}`}></div>
                        <div>
                          <h3 className=" font-bold text-gray-800 ">{team.name}</h3>
                          <p className="text-[#BFBFBF] font-semibold text-sm">
                            <span className=" text-[#0F296D] ">{team.avreg}</span> of total revenue
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" absolute text-xs z-100 bg-white right-33 top-42 shadow-lg py-2  px-4 w-45 rounded-lg ">
                    <h2 className=" text-[#0F296D] font-semibold text-xl ">25M</h2>
                    <p className=" font-semibold my-1 ">offline</p>
                    <div className=" flex font-semibold items-center gap-1.5 text-[#CFCFCF] ">
                      50 running batches{" "}
                      <span>
                        {" "}
                        <span>
                          <FaChevronRight color="#F1554C" />
                        </span>{" "}
                      </span>
                    </div>
                  </div>
                  <h2 className=" text-xl absolute top-26 right-25 font-bold  text-[#393D54] ">50m</h2>
                  <div className=" absolute -top-0 left-50 ">
                    <img className=" w-80   " src="main\Group2895.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 w-[53%] ">
            <div className="bg-white rounded-4xl [box-shadow:0_0_15px_rgba(0,0,0,0.1)] p-7 w-full ">
              <div className="mb-8 flex justify-between  items-center w-full  ">
                <h2 className="  text-lg font-bold text-gray-800 mb-2">Batch Performance</h2>
                <p className="text-gray-500 ">All information in percentage(%)</p>
              </div>

              <div className="flex items-end justify-between ">
                {/* Teams List */}
                <div className="space-y-6  ">
                  {teams.map((team, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-6 h-6 rounded ${team.color}`}></div>
                      <div>
                        <h3 className=" font-bold text-gray-800">{team.name}</h3>
                        <p className="text-gray-400 text-sm">Performance</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3D Bar Chart */}
                <div className="flex items-end gap-2 justify-center  ">
                  <div className="flex flex-col gap-5 justify-between  text-right pr-4 text-gray-400 text-sm">
                    <div>100</div>
                    <div>75</div>
                    <div>55</div>
                    <div>35</div>
                    <div>00</div>
                  </div>
                  <div className="flex items-end space-x-12">
                    <img src="main\Group2888.svg" alt="" />
                    <img src="main\Group2889.svg" alt="" />
                    <img src="main\Group2890.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-4xl [box-shadow:0_0_15px_rgba(0,0,0,0.1)]">
              <div className=" flex w-full mb-2 justify-between ">
                <h3 className="text-lg font-semibold mb-5 text-[#393D54]">Top Performer</h3>
                <div className=" flex items-center gap-2 justify-center text-xs font-semibold mb-3 py-2 px-4  border-2 rounded-2xl border-[#C4C4C45C] ">
                  June – July{" "}
                  <span>
                    <FaChevronDown color="#C4C4C45C" />
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className=" cursor-pointer relative bg-[#F1554C] text-white py-4 px-3 rounded-xl text-center hover:-translate-y-1 hover:shadow-lg transition-all">
                  <img className=" mx-auto mb-1.5 " src="main\Ellipse4.svg" alt="" />
                  <img className=" absolute -top-2 -right-2 " src="main\Group.svg" alt="" />
                  <h3 className="font-semibold text-lg ">Mivaan</h3>
                  <p className=" text-xs ">Jr. Knights</p>
                  <p className="text-xl font-bold my-1">90%</p>
                  <p className=" text-xs mb-0.5 ">Attendance</p>
                  <div className="text-sm font-semibold mt-1  bg-white/30 backdrop-blur-md bg-opacity-20 w-full px-2 py-2 rounded-xl inline-block">Blue Badge</div>
                </div>
                <div className=" cursor-pointer relative bg-[#0D276BFC] text-white py-4 px-3  rounded-xl text-center hover:-translate-y-1 hover:shadow-lg transition-all">
                  <img className=" mx-auto mb-1.5 " src="main\Ellipse5.svg" alt="" />
                  <img className=" absolute -top-2 -right-2 " src="main\Group.svg" alt="" />
                  <div className="font-semibold ">Aarohen</div>
                  <p className=" text-xs ">Jr. Knights</p>
                  <div className="text-xl font-bold my-1">85%</div>
                  <p className=" text-xs mb-0.5 ">Attendance</p>
                  <div className="text-sm font-semibold mt-1  bg-white/30 backdrop-blur-md bg-opacity-20 w-full px-2 py-2 rounded-xl inline-block">Pink Badge</div>
                </div>
                <div className=" cursor-pointer relative bg-[#FFA5A0] text-white py-4 px-3 rounded-xl text-center hover:-translate-y-1 hover:shadow-lg transition-all">
                  <img className=" mx-auto mb-1.5 " src="main\Ellipse6.svg" alt="" />
                  <img className=" absolute -top-2 -right-2 " src="main\Group.svg" alt="" />
                  <div className="font-semibold ">Amayraan</div>
                  <p className=" text-xs ">Jr. Knights</p>
                  <div className="text-xl font-bold my-1">78%</div>
                  <p className=" text-xs mb-0.5 ">Attendance</p>
                  <div className="text-sm font-semibold mt-1  bg-white/30 backdrop-blur-md bg-opacity-20 w-full px-2 py-2 rounded-xl inline-block">Orange Badge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
