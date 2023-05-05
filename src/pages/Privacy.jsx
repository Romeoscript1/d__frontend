import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

const Privacy = () => {
  return (
    <div>
      <Layout>
        <Banner className="terms">
          <div className="text-5xl font-bold text-white h-full z-20 flex items-center p-[4rem] justify-left">
            Privacy Policy
          </div>
        </Banner>
        <div className="my-[3rem] w-4/5 m-auto text-xl">
          <h1 className="text-4xl">
            WE'RE ALWAYS LOOKING FOR NEW WAYS TO PROVIDE PRIVACY FOR OUR
            CUSTOMERS.
          </h1>
          <p className="my-[1.5rem]">
            Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit
            habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed
            nam vulputate pellentesque quis. Varius a, nunc faucibus proin
            elementum id odio auctor. Nunc, suspendisse consequat libero,
            pharetra tellus vulputate auctor venenatis tortor non rhoncus at
            duis. Pharetra ipsum mauris integer sit feugiat.
          </p>
          <ul>
            <li className="ml-8 mb-6">
              — Blandit dignissim nulla varius tristique a sed integer ut
              tempor.
            </li>
            <li className="ml-8 mb-6">— Augue interdum semper bibendum amet sed.</li>
            <li className="ml-8 mb-6">— Dis in at ultricies tortor sit tellus.</li>
            <li className="ml-8 mb-6">— Habitant ornare aenean maecenas pretium</li>
          </ul>
          <p className="my-[1.5rem]">
            Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus
            purus. Commodo fames tristique dui pharetra elit aliquet morbi. Eget
            consectetur risus nunc lorem sit consequat aliquet. Dolor velit
            consectetur etiam scelerisque. Integer interdum sodales scelerisque
            diam massa quam sit quis. Sed et dui a nam pulvinar. Tristique
            justo, donec lectus vitae, cursus ligula ridiculus lacus, tincidunt.
            Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo.
            Etiam dignissim orci dignissim vitae.
          </p>
          <h1 className="text-4xl my-[1.5rem]">
            YOUR DATA IS SAFE WITH US, WE WILL NOT SHARE ANY INFORMATION WITH
            EXTERNAL SOURCES.
          </h1>
          <p>
            Blandit dignissim nulla varius tristique a sed integer ut tempor.
            Augue interdum semper bibendum amet sed. Dis in at ultricies tortor
            sit tellus. Habitant ornare aenean maecenas pretium, dui ullamcorper
            quis. Egestas viverra et id aliquet faucibus rhoncus a. Sollicitudin
            nisl nulla tempor pretium lorem at mauris faucibus pulvinar.
          </p>

          <ol className="list-decimal list-inside my-[1.5rem]">
            <li className="ml-8 mb-6">
              Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus
              purus. Commodo fames tristique dui pharetra elit aliquet morbi.
            </li>
            <li className="ml-8 mb-6">
              Eget consectetur risus nunc lorem sit consequat aliquet. Dolor
              velit consectetur etiam scelerisque.
            </li>
            <li className="ml-8 mb-6">
              Integer interdum sodales scelerisque diam massa quam sit quis. Sed
              et dui a nam pulvinar. Tristique justo, donec lectus vitae, cursus
              ligula ridiculus lacus, tincidunt.
            </li>
          </ol>

          <h1 className="text-4xl my-[1.5rem]">COOKIES AND TRACKING</h1>
          <p className="mb-[4rem]">
            Consequat mauris nunc congue nisi. Cursus metus aliquam eleifend mi
            in nulla. Dignissim cras tincidunt lobortis feugiat vivamus. Blandit
            aliquam etiam erat velit. Sapien faucibus et molestie ac. Ornare
            aenean euismod elementum nisi quis eleifend quam adipiscing vitae.
            Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Privacy;
