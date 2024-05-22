import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

import hungryhands_2 from "/public/assets/projects/hungryhands_2.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";

import hh1 from "/public/assets/projects/hh_1.png";
import hh2 from "/public/assets/projects/hh_2.png";
import hh3 from "/public/assets/projects/hh_3.png";
import restaurant_1 from "/public/assets/projects/restaurant_1.png";

const foodappPage = () => {
  return (
    <div className="w-full  bg-gradient-to-b  from-[#99AEAD] via-[#D8D8D8] to-[#99AEAD]">
      <Navbar />
      <div className="w-screen  h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={hungryhands_2}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Hungry Handds Restaurant Dashboard</h2>
          <h3>Flutter / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-wrap">
          <p className="p-4">
            Hungry Hands, a mobile app with three separate applications, can
            fill the gap in the food delivery/pickup market on college campuses.
            The three applications for the delivery person, restaurant, and
            customer are designed with ease of use and accessibility in mind.
            The app aims to provide students with a convenient and efficient way
            to order food, reducing wait times and offering both delivery and
            pick-up options.
          </p>
          <p className="p-4">
            For delivery persons, the app offers a simple interface that
            displays delivery requests, pickup locations, and delivery locations
            from a static list of locations. The app has a built-in GPS system
            using the Google Maps API to help delivery persons navigate their
            way around campus. With this app, delivery persons can easily accept
            orders and complete deliveries in a timely manner, improving
            customer satisfaction and repeat business.
          </p>
          
          <Image
              className="rounded-xl hover:scale-105 ease-in duration-300 float-left mr-4"
              src={restaurant_1}
              alt=""
              width="600"
              height="600"
            />
          <p className="p-4">
            For restaurants, the app provides a dashboard that allows them to
            easily manage their menu, track orders, and communicate with
            delivery persons and customers when orders are complete or ready for
            pick up respectively. They can receive real-time updates on orders
            and can easily modify their menu items and prices. With this app,
            restaurants can streamline their operations and provide a better
            customer experience.
          </p>
          <p className="p-4">
            For customers, the app allows them to browse menus, place orders,
            and pay. Customers can also track the status of their orders in real
            time and receive notifications when their food is ready for pick-up
            or when their delivery is on its way. The app provides a simple,
            user-friendly interface that makes ordering food quick and easy,
            with a wide selection of campus restaurants to choose from.
          </p>
          <p className="p-4">
            Overall, Hungry Hands fills the gap in the food delivery/pickup
            market on college campuses by providing a simple, easy-to-use app
            for all stakeholders - delivery persons, restaurants, and customers.
            With its focus on accessibility, short wait times, and delivery and
            pick-up options, Hungry Hands is poised to revolutionize food
            delivery and pickup on college campuses.
          </p>
          <Image
              className="rounded-xl hover:scale-105 ease-in duration-300 float-right mr-4"
              src={hh3}
              alt=""
              width="250"
              height="250"
            />
          <p className="p-4">
            The development of Hungry Hands involves using various tools and
            software that the team had limited knowledge of, resulting in a
            challenging and unique environment for creating the food app. The
            team decided to utilize Flutter, an open-source framework, for its
            cross-platform mobile application development capabilities. Flutter
            offers benefits such as visually appealing user interfaces,
            responsive design, quick code changes through hot reload, and a vast
            library of pre-built widgets and tools. It also supports multiple
            programming languages, including Dart, Java, and Kotlin, enabling
            developers to switch between languages seamlessly. Android Studio
            and Visual Studio are the chosen integrated development environments
            (IDEs) that provide advanced code editing, layout design, code
            templates, analysis tools, and debugging features, streamlining the
            app development process. Dart programming language was primarily
            used for the project due to its popularity among app developers,
            especially for creating mobile apps using the Flutter framework.
            Dart offers a simple syntax, efficient garbage collection,
            asynchronous programming support with async/await, and an extensive
            package library, making it suitable for developing high-performance
            and reliable applications. Flutter was utilized for the front-end
            development to enable the app's deployment on multiple platforms,
            including iOS, Android, and websites.
          </p>
          <Image
              className="rounded-xl hover:scale-105 ease-in duration-300 float-left mr-4"
              src={hh2}
              alt=""
              width="250"
              height="250"
            />
          <p className="p-4">
            The chosen database solution was Firebase Database, a real-time
            cloud-hosted database provided by Google. Firebase Database offers
            real-time data synchronization, flexible data storage in JSON
            format, and security features like authentication. It is
            particularly beneficial for real-time and collaborative applications
            where multiple users need simultaneous access and modification of
            data. Overall, the team leveraged the power of Flutter, Dart,
            Android Studio/VS Code, and Firebase Database to create a visually
            appealing, responsive, and efficient food app.
          </p>
          </div>
          <div class="clear-both"></div> 
          <div >
          <a
            href="https://www.youtube.com/watch?v=wcgHYngrexM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Video Demo</button>
          </a>

          <a
            href="https://github.com/SamSantanaDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          
          </div>
        </div>
        <div className="col-span-4 h-80 md:col-span-1 shadow-lg shadow-[#3C3C3C] rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flutter
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> XCode
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Auth
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Github
              </p>
            </div>
          </div>
          
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default foodappPage;
