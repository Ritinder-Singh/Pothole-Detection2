"use client";

import { useState } from "react";
import Button from "../FormControls/button";
import Modal from "../Modal";
import { productFormControls } from "@/utils/config";
import { useRouter } from "next/navigation";

const intialFormData = {
  PotholeID: "0",
  GPS: "0",
  TeamId: 0,
  Status: 0,
  Date: "",
};

export default function ProductLayout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(intialFormData);

  const router = useRouter();

  console.log(formData);

  async function handleAddProduct() {
    const res = await fetch("/api/product/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data && data.success) {
      setFormData(intialFormData);
      setShowModal(false);
      router.refresh();
    } else {
      setFormData(intialFormData);
      setShowModal(false);
    }
  }

  return (
    <div className="text-black">
      <Button onClick={() => setShowModal(true)} text={"Add New Pothole Data"} />
      {children}
      <Modal
        show={showModal}
        setShow={setShowModal}
        formData={formData}
        setFormData={setFormData}
        formControls={productFormControls}
        onAdd={handleAddProduct}
      />
    </div>
  );
}
