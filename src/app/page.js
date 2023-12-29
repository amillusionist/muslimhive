"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalBox from "../../components/ModalBoxWide";
import RegisterFrom from "../../public/forms/register";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContainerImage from "../../public/container.png";
import SearchImage from "../../public/Search.svg";
import Image1 from "../../public/img1.svg";
import Image2 from "../../public/img2.svg";
import Image3 from "../../public/img3.svg";
import Image4 from "../../public/img4.svg";
import Image5 from "../../public/img5.svg";
import profile from "../../public/assets/images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Frame from "../../public/Frame.svg";
import { categoreyList, categoreyList2 } from "../../components/menuOptions";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-width center-m">
        <div className="flex pad-ver-60 gap-100 space-between">
          <div className="container col gap-24 width-50">
            <div>
              <h1>
                Find the Best Businesses
                <br />
                in Your Area
              </h1>
            </div>
            <div className="flex gap-24 ">
              <div className="flex input-border pad-7 width-40 space-between">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search by Location"
                />
                <Image src={SearchImage} />
              </div>
              <div className="flex input-border pad-7 width-60 space-between">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search for businesses"
                />
                <Image src={SearchImage} />
              </div>
            </div>
          </div>
          <div className="width-50">
            <Image src={ContainerImage} />
          </div>
        </div>

        <div className="flex gap-20">
          <Image src={Image1} />
          <Image src={Image2} />
          <Image src={Image3} />
          <Image src={Image4} />
          <Image src={Image5} />
        </div>

        <div className="categoreyList flex col gap-60">
          <div className="flex space-between">
            {categoreyList.map((item) => (
              <div key={item.id}>
                <Image src={item.Image} width={68} />
              </div>
            ))}
          </div>
          <div className="flex space-between">
            {categoreyList2.map((item) => (
              <div key={item.id}>
                <Image src={item.Image} width={68} />
              </div>
            ))}
          </div>
        </div>
        <div className="container col gap-40">
          <div className="container col gap-20">
            <h2>Popular Categories</h2>
            <div className="center">
              <p>Explore businesses across various categories</p>
            </div>
          </div>
          <div className="container gap-40">
            <div className="container width-60">
              <Image src={Image1} className="imgwidth" />
            </div>
            <div className="container width-20">
              <Image src={Image1} className="imgwidth" />
            </div>
            <div className="container width-20">
              <Image src={Image1} className="imgwidth" />
            </div>
          </div>
          <div className="container gap-40">
            <div className="container width-20">
              <Image src={Image1} className="imgwidth" />
            </div>
            <div className="container width-20">
              <Image src={Image1} className="imgwidth" />
            </div>
            <div className="container width-60">
              <Image src={Image1} className="imgwidth" />
            </div>
          </div>
        </div>
        <div className="p-100 container vCenter">
          <div className="width-60">
            <div>
              <h2 className="left">Why Choose Us?</h2>
              <p>Discover the benefits of using our platform</p>
            </div>
          </div>
          <div className="width-40 container gap-40 col">
            <div className="container vcards">
              <div>
                <Image src={Image1} className="imgwidth" />
              </div>
              <div>
                <div>
                  <h3>Verified Listings</h3>
                </div>
                <p>
                  All businesses listed on our platform are verified for
                  authenticity and quality
                </p>
              </div>
            </div>
            <div className="container vcards">
              <div>
                <Image src={Image1} className="imgwidth" />
              </div>
              <div>
                <div>
                  <h3>User Reviews</h3>
                </div>
                <p>
                  Read honest reviews from customers to make informed decisions
                </p>
              </div>
            </div>
            <div className="container vcards">
              <div>
                <Image src={Image1} className="imgwidth" />
              </div>
              <div>
                <div>
                  <h3>Easy Search</h3>
                </div>
                <p>
                  Effortlessly find businesses using our powerful search filters
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="container p-100 vCenter">
          <div className="width-60">
            <h2 className="left">Customer Reviews</h2>
          </div>
          <div className="width-40 flex gap-20">
            <div className="crCards width-50 flex col gap-10">
              <div className="imgBox flex space-between">
                <div className="flex gap-20 ">
                  <Image src={profile} />
                  <h3>John Doe</h3>
                </div>
                icons
              </div>
              <p>Great service and highly recommended!</p>
            </div>
            <div className="crCards width-50 flex col gap-10">
              <div className="imgBox flex space-between">
                <div className="flex gap-20 ">
                  <Image src={profile} />
                  <h3>John Doe</h3>
                </div>
                icons
              </div>
              <p>Great service and highly recommended!</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
