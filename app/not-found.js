import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="p-60 h-screen">
      <h1 className="p-18 text-4xl text-center text-black-700 tracking-widest font-semibold " >404 | Page Not Found</h1>
      <p className='text-center p-10 text-2xl'> Please return <Link href="/" className='p-3 text-3xl font-bold transition-all ease-in-out cursor-pointer text-green-600 hover:text-2xl'> Home </Link></p>
    </div>
  );
};
