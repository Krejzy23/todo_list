"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
// import CreateContent from "../Modals/CreateContent";
import TaskItem from "../TaskItem/TaskItem";
import { add, plus } from "@/app/utils/Icons";
// import Modal from "../Modals/Modal";

interface Props {
  title: string;
  tasks: any[];
}

function Tasks({ title, tasks }: Props) {
  const { theme, isLoading, openModal, modal } = useGlobalState();

  return (
    <main
      className={`relative p-8 w-full bg-bg2 border-2 border-border2 rounded-xl h-full overflow-y-auto`}
    >
      {/* {modal && <Modal content={<CreateContent />} />} */}
      <h1 className="relative text-[clamp(1.5rem,2vw,2rem)] font-extrabold">
        {title}
        <span
          className={`absolute bottom-[-0.5rem] left-0 w-12 h-0.5 bg-primaryGreen rounded-md`}
        ></span>
      </h1>

      <button
        className={`fixed top-[4.9rem] right-[5.1rem] w-12 h-12 rounded-full bg-bg border-2 border-border2 shadow-[0_3px_15px_rgba(0,0,0,0.3)] text-grey2 text-2xl flex items-center justify-center`}
        onClick={openModal}
      >
        {plus}
      </button>

      <div className="tasks grid gap-8 mt-8">
        {/* {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
          />
        ))} */}
        <button
          className={`create-task flex items-center justify-center gap-2 h-40 text-grey2 font-semibold cursor-pointer rounded-xl border-3 border-dashed border-grey5 transition-all duration-300 hover:bg-grey5 hover:text-grey0`}
          onClick={openModal}
        >
          {add}
          Add New Task
        </button>
      </div>
    </main>
  );
}

export default Tasks;