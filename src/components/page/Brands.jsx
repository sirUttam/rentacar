import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import contactCar from "../../assets/contactCar.jpg";
import renaultclio from "../../assets/Renault_Clio 1.png";
import Suzuki from "../../assets/Suzuki_Swift 1.png";
function SingleBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const data=[
    {
      title:"The Legacy of Lamborghini: A Journey Through",
      date:"Aug 13, 2024",
      image:contactCar,
      description: `Dolor laborum aliquip duis consectetur id minim ipsum culpa. Nulla consequat fugiat nisi deserunt aute voluptate irure ea ea veniam. Sint pariatur id sit tempor ad commodo.

Sunt ad aliquip ullamco mollit esse excepteur officia aute culpa ad et. Amet aute reprehenderit fugiat adipisicing et quis. Labore veniam exercitation ea dolore ut ex. Voluptate ad ipsum mollit velit consectetur.

Sit mollit do laborum aute adipisicing eiusmod dolor et occaecat consectetur nostrud enim. Dolore proident cillum velit quis qui irure aute amet deserunt eiusmod commodo reprehenderit tempor ipsum. Amet commodo aliquip laborum ad minim cupidatat cupidatat occaecat excepteur. Exercitation est consectetur aliqua aute pariatur et incididunt ad. Irure laboris mollit eiusmod officia cupidatat ut cillum cillum. Sunt mollit laborum ea nulla ea dolor ad pariatur incididunt. Consequat sit consequat non duis.

Nulla cillum irure esse nisi nulla tempor. Nisi amet eu voluptate do eu quis sit sunt consectetur Lorem dolor velit. Minim fugiat nisi sit consectetur id nulla non qui do. Reprehenderit duis labore eiusmod et cillum tempor amet. Ipsum velit aute ullamco est est aliqua laboris eiusmod. Ipsum eiusmod dolor est ad ullamco tempor nulla laborum. Ad deserunt reprehenderit excepteur excepteur eu laborum fugiat consectetur elit.

Non amet sint in tempor proident quis est mollit esse sint magna est. Eu culpa exercitation cillum excepteur dolore aliqua proident. Consequat ullamco aliquip do exercitation nisi. Consequat eiusmod elit tempor Lorem ad ea dolore voluptate nulla elit laboris. Irure quis ex eu mollit. Laboris veniam esse labore eu Lorem.

Id quis labore dolore dolore commodo esse adipisicing reprehenderit. Laborum amet qui velit consectetur esse cillum consequat ad Lorem consectetur est aliquip elit eu. In officia proident veniam deserunt Lorem do cupidatat. Ex id aliqua officia anim fugiat. Ullamco adipisicing excepteur ex commodo sit veniam. Quis sunt excepteur occaecat excepteur pariatur velit incididunt Lorem. Deserunt nisi Lorem aliquip magna enim ea eu ipsum eu.

Ex commodo ullamco incididunt aliqua eu ex enim laboris culpa labore. Occaecat nostrud occaecat labore cupidatat veniam amet deserunt nostrud adipisicing commodo elit anim cupidatat irure. Nisi mollit nulla irure consectetur eiusmod id Lorem culpa officia duis nulla anim voluptate amet. Est aliqua tempor duis enim amet. Minim esse voluptate non proident non incididunt laborum ut.

Velit amet cupidatat consectetur aliquip. Non proident culpa consectetur eiusmod enim. Culpa incididunt non Lorem Lorem. Occaecat sunt dolor adipisicing reprehenderit Lorem sunt eiusmod laborum excepteur sunt. Duis ad ut ut laborum. Cillum laborum fugiat laborum tempor. Nostrud ipsum reprehenderit eiusmod id cupidatat mollit nisi.,
`
    },
    {
      title:"The Legacy of Renault Clio: A Journey Through",
      date:"Aug 13, 2024",
      image:renaultclio,
      description: `Dolor laborum aliquip duis consectetur id minim ipsum culpa. Nulla consequat fugiat nisi deserunt aute voluptate irure ea ea veniam. Sint pariatur id sit tempor ad commodo.

Sunt ad aliquip ullamco mollit esse excepteur officia aute culpa ad et. Amet aute reprehenderit fugiat adipisicing et quis. Labore veniam exercitation ea dolore ut ex. Voluptate ad ipsum mollit velit consectetur.

Sit mollit do laborum aute adipisicing eiusmod dolor et occaecat consectetur nostrud enim. Dolore proident cillum velit quis qui irure aute amet deserunt eiusmod commodo reprehenderit tempor ipsum. Amet commodo aliquip laborum ad minim cupidatat cupidatat occaecat excepteur. Exercitation est consectetur aliqua aute pariatur et incididunt ad. Irure laboris mollit eiusmod officia cupidatat ut cillum cillum. Sunt mollit laborum ea nulla ea dolor ad pariatur incididunt. Consequat sit consequat non duis.

Nulla cillum irure esse nisi nulla tempor. Nisi amet eu voluptate do eu quis sit sunt consectetur Lorem dolor velit. Minim fugiat nisi sit consectetur id nulla non qui do. Reprehenderit duis labore eiusmod et cillum tempor amet. Ipsum velit aute ullamco est est aliqua laboris eiusmod. Ipsum eiusmod dolor est ad ullamco tempor nulla laborum. Ad deserunt reprehenderit excepteur excepteur eu laborum fugiat consectetur elit.

Non amet sint in tempor proident quis est mollit esse sint magna est. Eu culpa exercitation cillum excepteur dolore aliqua proident. Consequat ullamco aliquip do exercitation nisi. Consequat eiusmod elit tempor Lorem ad ea dolore voluptate nulla elit laboris. Irure quis ex eu mollit. Laboris veniam esse labore eu Lorem.

Id quis labore dolore dolore commodo esse adipisicing reprehenderit. Laborum amet qui velit consectetur esse cillum consequat ad Lorem consectetur est aliquip elit eu. In officia proident veniam deserunt Lorem do cupidatat. Ex id aliqua officia anim fugiat. Ullamco adipisicing excepteur ex commodo sit veniam. Quis sunt excepteur occaecat excepteur pariatur velit incididunt Lorem. Deserunt nisi Lorem aliquip magna enim ea eu ipsum eu.

Ex commodo ullamco incididunt aliqua eu ex enim laboris culpa labore. Occaecat nostrud occaecat labore cupidatat veniam amet deserunt nostrud adipisicing commodo elit anim cupidatat irure. Nisi mollit nulla irure consectetur eiusmod id Lorem culpa officia duis nulla anim voluptate amet. Est aliqua tempor duis enim amet. Minim esse voluptate non proident non incididunt laborum ut.

Velit amet cupidatat consectetur aliquip. Non proident culpa consectetur eiusmod enim. Culpa incididunt non Lorem Lorem. Occaecat sunt dolor adipisicing reprehenderit Lorem sunt eiusmod laborum excepteur sunt. Duis ad ut ut laborum. Cillum laborum fugiat laborum tempor. Nostrud ipsum reprehenderit eiusmod id cupidatat mollit nisi.,
`
    },
    {
      title:"The Legacy of Suzuki: A Journey Through",
      date:"Aug 13, 2024",
      image:Suzuki,
      description: `Dolor laborum aliquip duis consectetur id minim ipsum culpa. Nulla consequat fugiat nisi deserunt aute voluptate irure ea ea veniam. Sint pariatur id sit tempor ad commodo.

Sunt ad aliquip ullamco mollit esse excepteur officia aute culpa ad et. Amet aute reprehenderit fugiat adipisicing et quis. Labore veniam exercitation ea dolore ut ex. Voluptate ad ipsum mollit velit consectetur.

Sit mollit do laborum aute adipisicing eiusmod dolor et occaecat consectetur nostrud enim. Dolore proident cillum velit quis qui irure aute amet deserunt eiusmod commodo reprehenderit tempor ipsum. Amet commodo aliquip laborum ad minim cupidatat cupidatat occaecat excepteur. Exercitation est consectetur aliqua aute pariatur et incididunt ad. Irure laboris mollit eiusmod officia cupidatat ut cillum cillum. Sunt mollit laborum ea nulla ea dolor ad pariatur incididunt. Consequat sit consequat non duis.

Nulla cillum irure esse nisi nulla tempor. Nisi amet eu voluptate do eu quis sit sunt consectetur Lorem dolor velit. Minim fugiat nisi sit consectetur id nulla non qui do. Reprehenderit duis labore eiusmod et cillum tempor amet. Ipsum velit aute ullamco est est aliqua laboris eiusmod. Ipsum eiusmod dolor est ad ullamco tempor nulla laborum. Ad deserunt reprehenderit excepteur excepteur eu laborum fugiat consectetur elit.

Non amet sint in tempor proident quis est mollit esse sint magna est. Eu culpa exercitation cillum excepteur dolore aliqua proident. Consequat ullamco aliquip do exercitation nisi. Consequat eiusmod elit tempor Lorem ad ea dolore voluptate nulla elit laboris. Irure quis ex eu mollit. Laboris veniam esse labore eu Lorem.

Id quis labore dolore dolore commodo esse adipisicing reprehenderit. Laborum amet qui velit consectetur esse cillum consequat ad Lorem consectetur est aliquip elit eu. In officia proident veniam deserunt Lorem do cupidatat. Ex id aliqua officia anim fugiat. Ullamco adipisicing excepteur ex commodo sit veniam. Quis sunt excepteur occaecat excepteur pariatur velit incididunt Lorem. Deserunt nisi Lorem aliquip magna enim ea eu ipsum eu.

Ex commodo ullamco incididunt aliqua eu ex enim laboris culpa labore. Occaecat nostrud occaecat labore cupidatat veniam amet deserunt nostrud adipisicing commodo elit anim cupidatat irure. Nisi mollit nulla irure consectetur eiusmod id Lorem culpa officia duis nulla anim voluptate amet. Est aliqua tempor duis enim amet. Minim esse voluptate non proident non incididunt laborum ut.

Velit amet cupidatat consectetur aliquip. Non proident culpa consectetur eiusmod enim. Culpa incididunt non Lorem Lorem. Occaecat sunt dolor adipisicing reprehenderit Lorem sunt eiusmod laborum excepteur sunt. Duis ad ut ut laborum. Cillum laborum fugiat laborum tempor. Nostrud ipsum reprehenderit eiusmod id cupidatat mollit nisi.,
`
    },
    {
      title:"The Legacy of Lamborghini: A Journey Through",
      date:"Aug 13, 2024",
      image:contactCar,
      description: `Dolor laborum aliquip duis consectetur id minim ipsum culpa. Nulla consequat fugiat nisi deserunt aute voluptate irure ea ea veniam. Sint pariatur id sit tempor ad commodo.

Sunt ad aliquip ullamco mollit esse excepteur officia aute culpa ad et. Amet aute reprehenderit fugiat adipisicing et quis. Labore veniam exercitation ea dolore ut ex. Voluptate ad ipsum mollit velit consectetur.

Sit mollit do laborum aute adipisicing eiusmod dolor et occaecat consectetur nostrud enim. Dolore proident cillum velit quis qui irure aute amet deserunt eiusmod commodo reprehenderit tempor ipsum. Amet commodo aliquip laborum ad minim cupidatat cupidatat occaecat excepteur. Exercitation est consectetur aliqua aute pariatur et incididunt ad. Irure laboris mollit eiusmod officia cupidatat ut cillum cillum. Sunt mollit laborum ea nulla ea dolor ad pariatur incididunt. Consequat sit consequat non duis.

Nulla cillum irure esse nisi nulla tempor. Nisi amet eu voluptate do eu quis sit sunt consectetur Lorem dolor velit. Minim fugiat nisi sit consectetur id nulla non qui do. Reprehenderit duis labore eiusmod et cillum tempor amet. Ipsum velit aute ullamco est est aliqua laboris eiusmod. Ipsum eiusmod dolor est ad ullamco tempor nulla laborum. Ad deserunt reprehenderit excepteur excepteur eu laborum fugiat consectetur elit.

Non amet sint in tempor proident quis est mollit esse sint magna est. Eu culpa exercitation cillum excepteur dolore aliqua proident. Consequat ullamco aliquip do exercitation nisi. Consequat eiusmod elit tempor Lorem ad ea dolore voluptate nulla elit laboris. Irure quis ex eu mollit. Laboris veniam esse labore eu Lorem.

Id quis labore dolore dolore commodo esse adipisicing reprehenderit. Laborum amet qui velit consectetur esse cillum consequat ad Lorem consectetur est aliquip elit eu. In officia proident veniam deserunt Lorem do cupidatat. Ex id aliqua officia anim fugiat. Ullamco adipisicing excepteur ex commodo sit veniam. Quis sunt excepteur occaecat excepteur pariatur velit incididunt Lorem. Deserunt nisi Lorem aliquip magna enim ea eu ipsum eu.

Ex commodo ullamco incididunt aliqua eu ex enim laboris culpa labore. Occaecat nostrud occaecat labore cupidatat veniam amet deserunt nostrud adipisicing commodo elit anim cupidatat irure. Nisi mollit nulla irure consectetur eiusmod id Lorem culpa officia duis nulla anim voluptate amet. Est aliqua tempor duis enim amet. Minim esse voluptate non proident non incididunt laborum ut.

Velit amet cupidatat consectetur aliquip. Non proident culpa consectetur eiusmod enim. Culpa incididunt non Lorem Lorem. Occaecat sunt dolor adipisicing reprehenderit Lorem sunt eiusmod laborum excepteur sunt. Duis ad ut ut laborum. Cillum laborum fugiat laborum tempor. Nostrud ipsum reprehenderit eiusmod id cupidatat mollit nisi.,
`
    },
    {
      title:"The Legacy of Lamborghini: A Journey Through",
      date:"Aug 13, 2024",
      image:contactCar,
      description: `Dolor laborum aliquip duis consectetur id minim ipsum culpa. Nulla consequat fugiat nisi deserunt aute voluptate irure ea ea veniam. Sint pariatur id sit tempor ad commodo.

Sunt ad aliquip ullamco mollit esse excepteur officia aute culpa ad et. Amet aute reprehenderit fugiat adipisicing et quis. Labore veniam exercitation ea dolore ut ex. Voluptate ad ipsum mollit velit consectetur.

Sit mollit do laborum aute adipisicing eiusmod dolor et occaecat consectetur nostrud enim. Dolore proident cillum velit quis qui irure aute amet deserunt eiusmod commodo reprehenderit tempor ipsum. Amet commodo aliquip laborum ad minim cupidatat cupidatat occaecat excepteur. Exercitation est consectetur aliqua aute pariatur et incididunt ad. Irure laboris mollit eiusmod officia cupidatat ut cillum cillum. Sunt mollit laborum ea nulla ea dolor ad pariatur incididunt. Consequat sit consequat non duis.

Nulla cillum irure esse nisi nulla tempor. Nisi amet eu voluptate do eu quis sit sunt consectetur Lorem dolor velit. Minim fugiat nisi sit consectetur id nulla non qui do. Reprehenderit duis labore eiusmod et cillum tempor amet. Ipsum velit aute ullamco est est aliqua laboris eiusmod. Ipsum eiusmod dolor est ad ullamco tempor nulla laborum. Ad deserunt reprehenderit excepteur excepteur eu laborum fugiat consectetur elit.

Non amet sint in tempor proident quis est mollit esse sint magna est. Eu culpa exercitation cillum excepteur dolore aliqua proident. Consequat ullamco aliquip do exercitation nisi. Consequat eiusmod elit tempor Lorem ad ea dolore voluptate nulla elit laboris. Irure quis ex eu mollit. Laboris veniam esse labore eu Lorem.

Id quis labore dolore dolore commodo esse adipisicing reprehenderit. Laborum amet qui velit consectetur esse cillum consequat ad Lorem consectetur est aliquip elit eu. In officia proident veniam deserunt Lorem do cupidatat. Ex id aliqua officia anim fugiat. Ullamco adipisicing excepteur ex commodo sit veniam. Quis sunt excepteur occaecat excepteur pariatur velit incididunt Lorem. Deserunt nisi Lorem aliquip magna enim ea eu ipsum eu.

Ex commodo ullamco incididunt aliqua eu ex enim laboris culpa labore. Occaecat nostrud occaecat labore cupidatat veniam amet deserunt nostrud adipisicing commodo elit anim cupidatat irure. Nisi mollit nulla irure consectetur eiusmod id Lorem culpa officia duis nulla anim voluptate amet. Est aliqua tempor duis enim amet. Minim esse voluptate non proident non incididunt laborum ut.

Velit amet cupidatat consectetur aliquip. Non proident culpa consectetur eiusmod enim. Culpa incididunt non Lorem Lorem. Occaecat sunt dolor adipisicing reprehenderit Lorem sunt eiusmod laborum excepteur sunt. Duis ad ut ut laborum. Cillum laborum fugiat laborum tempor. Nostrud ipsum reprehenderit eiusmod id cupidatat mollit nisi.,
`
    },
    {
      title:"The Legacy of Lamborghini: A Journey Through",
      date:"Aug 13, 2024",
      image:contactCar,
      description: `Dolor laborum aliquip duis consectetur id minim ipsum culpa. Nulla consequat fugiat nisi deserunt aute voluptate irure ea ea veniam. Sint pariatur id sit tempor ad commodo.

Sunt ad aliquip ullamco mollit esse excepteur officia aute culpa ad et. Amet aute reprehenderit fugiat adipisicing et quis. Labore veniam exercitation ea dolore ut ex. Voluptate ad ipsum mollit velit consectetur.

Sit mollit do laborum aute adipisicing eiusmod dolor et occaecat consectetur nostrud enim. Dolore proident cillum velit quis qui irure aute amet deserunt eiusmod commodo reprehenderit tempor ipsum. Amet commodo aliquip laborum ad minim cupidatat cupidatat occaecat excepteur. Exercitation est consectetur aliqua aute pariatur et incididunt ad. Irure laboris mollit eiusmod officia cupidatat ut cillum cillum. Sunt mollit laborum ea nulla ea dolor ad pariatur incididunt. Consequat sit consequat non duis.

Nulla cillum irure esse nisi nulla tempor. Nisi amet eu voluptate do eu quis sit sunt consectetur Lorem dolor velit. Minim fugiat nisi sit consectetur id nulla non qui do. Reprehenderit duis labore eiusmod et cillum tempor amet. Ipsum velit aute ullamco est est aliqua laboris eiusmod. Ipsum eiusmod dolor est ad ullamco tempor nulla laborum. Ad deserunt reprehenderit excepteur excepteur eu laborum fugiat consectetur elit.

Non amet sint in tempor proident quis est mollit esse sint magna est. Eu culpa exercitation cillum excepteur dolore aliqua proident. Consequat ullamco aliquip do exercitation nisi. Consequat eiusmod elit tempor Lorem ad ea dolore voluptate nulla elit laboris. Irure quis ex eu mollit. Laboris veniam esse labore eu Lorem.

Id quis labore dolore dolore commodo esse adipisicing reprehenderit. Laborum amet qui velit consectetur esse cillum consequat ad Lorem consectetur est aliquip elit eu. In officia proident veniam deserunt Lorem do cupidatat. Ex id aliqua officia anim fugiat. Ullamco adipisicing excepteur ex commodo sit veniam. Quis sunt excepteur occaecat excepteur pariatur velit incididunt Lorem. Deserunt nisi Lorem aliquip magna enim ea eu ipsum eu.

Ex commodo ullamco incididunt aliqua eu ex enim laboris culpa labore. Occaecat nostrud occaecat labore cupidatat veniam amet deserunt nostrud adipisicing commodo elit anim cupidatat irure. Nisi mollit nulla irure consectetur eiusmod id Lorem culpa officia duis nulla anim voluptate amet. Est aliqua tempor duis enim amet. Minim esse voluptate non proident non incididunt laborum ut.

Velit amet cupidatat consectetur aliquip. Non proident culpa consectetur eiusmod enim. Culpa incididunt non Lorem Lorem. Occaecat sunt dolor adipisicing reprehenderit Lorem sunt eiusmod laborum excepteur sunt. Duis ad ut ut laborum. Cillum laborum fugiat laborum tempor. Nostrud ipsum reprehenderit eiusmod id cupidatat mollit nisi.,
`
    },
  ]
  console.log(location, "herer");
  return (
    <div className="pb-10">
      {location && location.state ? (
        <div className="flex flex-col gap-10">
          {/* banner */}
          <div className="h-[500px] relative text-white ">
            <div className="h-full relative w-full">
              <img
                src={location.state?.image}
                className="h-full object-cover object-center w-full"
              />
              <div className="bg-gray-400 h-full w-full absolute top-0 -z-10"></div>
            </div>
            <div className="w-11/12 absolute top-0 left-0 right-0 flex h-full justify-center flex-col gap-2 mx-auto">
              <div className="text-sm flex items-center gap-3 capitalize">
                home <IoIosArrowForward /> Blog <IoIosArrowForward />{" "}
                {location.state.title}
              </div>
              <div className="font-semibold text-3xl">
                {location.state?.title}
              </div>
            </div>
          </div>
          {/* banner ends here */}

          <div className="w-11/12 mx-auto grid grid-cols-6 gap-10">
            <div className="col-span-4 flex flex-col gap-9">
              <div className="text-gray-500 font-light">
                Published At :{" "}
                <span className=" text-gray-400">{location.state.date}</span>
              </div>
              <div className="text-justify text-gray-500 whitespace-break-spaces  text-sm  tracking-wide">
                {location.state.description}
              </div>
            </div>

            <div className="col-span-2 flex flex-col gap-6">
              <div className="border-b-4  border-primarycolor">
              <div className="bg-primarycolor w-fit rounded-t-md px-6  py-2 text-white">Recent Blog</div>
              </div>
              <div>
              <div className="grid  gap-5   mx-auto">
        {data.slice(0,4).map((val, i) => {
          return (
            <Link key={i} to={`/blog/${JSON.stringify(val.title)}`} state={val}>
              <div
                key={i}
                
                className="shadow-md border group grid grid-cols-5  gap-5   transition-all duration-700 delay-75 ease-in-out p-3 rounded-2xl"
              >
                <div className="h-32 col-span-2 w-full rounded-xl bg-gray-300 overflow-clip">
                  <img
                    src={val.image}
                    className="h-full group-hover:scale-125  group-hover:rotate-6 transition-all duration-700 delay-75 ease-in-out w-full object-cover"
                  />
                </div>
                <div className="flex col-span-3 flex-col gap-2">
                  <h1
                    className=" group-hover:text-primarycolor text-sm group-hover:scale-95 transition-all duration-700 delay-75 ease-in-out  font-semibold line-clamp-2"
                    key={val.title}
                  >
                    {val.title}
                  </h1>
                  <div className="line-clamp-2 text-gray-500  text-xs  group-hover:scale-95 transition-all duration-700 delay-75 ease-in-out ">
                    {val.description}
                  </div>
                  <div className="flex text-xs font-light justify-between border-t-2 border-primarycolor pt-2 mt-2 group-hover:scale-95 transition-all duration-700 delay-75 ease-in-out ">
                    <div className="text-primarycolor">Read more</div>
                    <div className="text-gray-500">{val.date}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No data with such id found</div>
      )}
    </div>
  );
}

export default SingleBlog;
