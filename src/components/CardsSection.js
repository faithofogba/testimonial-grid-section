import React from "react";
import Card from "./Card";
import Daniel from "../images/image-daniel.jpg";
import Jonathan from "../images/image-jonathan.jpg";
import Jeanette from "../images/image-jeanette.jpg";
import Patrick from "../images/image-patrick.jpg";
import Kira from "../images/image-kira.jpg";

export default function CardsSection() {
  return (
    <main className="row card-section">
      <div className="row">
        <div className="col-lg-9 col-xs-12">
          <div className="row">
            <div className="col-lg-8 col-xs-12 mb-4">
              <Card
                backgroundStyle="card card-a"
                image={Daniel}
                name="Daniel Clifford"
                nameClass="mb-0 user-name"
                titleClass="card-title"
                quoteHeader="I received a job offer mid-course, and the subjects I learned were current, if not more so, 
        in the company I joined. I honestly feel I got every penny's worth."
                quoteText="“ I was an EMT for many years before I joined the bootcamp. I've been looking to make a 
        transition and have heard some people who had an amazing experience here. I signed up 
        for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
        The next 12 weeks was the best - and most grueling - time of my life. Since completing 
        the course, I've successfully switched careers, working as a Software Engineer at a VR startup. ”"
              />
            </div>
            <div className="col-lg-4 col-xs-12 mb-4">
              <Card
                backgroundStyle="card card-b"
                image={Jonathan}
                name="Jonathan Walters"
                nameClass="mb-0 user-name"
                titleClass="card-title"
                quoteHeader="The team was very supportive and kept me motivated"
                quoteText="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
        for a big company. This was one of the best investments I've made in myself. ”"
              />
            </div>
            <div className="col-lg-4 col-xs-12 mb-3">
              <Card
                backgroundStyle="card card-c"
                image={Jeanette}
                nameClass="mb-0 user-name name"
                titleClass="card-title title"
                name="Jeanette Harmon"
                quoteHeader="An overall wonderful and rewarding experience"
                quoteText="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
        while doing something I love. ”"
              />
            </div>
            <div className="col-lg-8 col-xs-12 mb-3">
              <Card
                backgroundStyle="card card-d"
                image={Patrick}
                name="Patrick Abrams"
                nameClass="mb-0 user-name"
                titleClass="card-title"
                quoteHeader="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
        learning from their experiences was easy."
                quoteText="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
        gave me the confidence necessary to be able to go out in the world and present myself as a capable 
        junior developer. The standard is above the rest. You will get the personal attention you need from 
        an incredible community of smart and amazing people. ”"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xs-12">
          <Card
            backgroundStyle="card card-e"
            image={Kira}
            name="Kira Whittle"
            nameClass="mb-0 user-name name"
            titleClass="card-title title"
            quoteHeader="Such a life-changing experience. Highly recommended!"
            quoteText="“ Before joining the bootcamp, I've never written a line of code. I needed some structure from 
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
        could ever have. In fact, I've often referred to it during interviews as an example of my developent 
        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
        100% recommend! ”"
          />
        </div>
      </div>
    </main>
  );
}
