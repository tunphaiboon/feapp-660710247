import React from "react";
import { Link } from "react-router-dom";

import { movies } from '../data/data';

import MovieCard from "../componence/MovieCard";
function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
    </div>
  );
}

export default Home;