"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { SphereGeometry } from "three";
import ThreeDimensionalModel from "./Loader";

const Model = () => {
  return (
    <Canvas className="mt-7">
      <Suspense fallback={null}>
        <ThreeDimensionalModel />
      </Suspense>
    </Canvas>
  );
};

export default Model;
