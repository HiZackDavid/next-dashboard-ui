"use client";

import Image from "next/image";

type Table =
  | "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "result"
  | "attendance"
  | "event"
  | "announcement";

type Type = "create" | "update" | "delete";

interface Props {
  table: Table;
  type: Type;
  data?: any;
  id?: number;
}

const FormModal = ({ table, type, data, id }: Props) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
      >
        <Image src={`/${type}.png`} alt={`${type}`} width={16} height={16} />
      </button>
    </>
  );
};

export default FormModal;
