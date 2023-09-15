
import Header from "@/components/header";
import Footer from "@/components/footer";
import Body from "@/components/body";
import { FETCH_CACHE_HEADER } from "next/dist/client/components/app-router-headers";

// export const getStaticProps = async()=>{

//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json(); 

//   return{
//     Props:{
//       data,
//     },
//   };
// }; 
const Home = () => {
  return (
    <>
      <Header />
       <Body/>
      
      <Footer/>
    </>
  );
};

export default Home;


