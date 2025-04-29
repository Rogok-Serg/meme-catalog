"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
} from "@heroui/table";
import { useState } from "react";
import { Button } from "@heroui/button";

import { useMemes } from "../../context/MemeContext";
import EditMemeModal from "../../components/EditMemeModal.jsx";

const MemeTablePage = () => {
  const { memes, updateMemes } = useMemes();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleEdit = (meme) => {
    setSelectedMeme(meme);
    setIsModalOpen(true);
  };
  const handleSave = () => {
    const updatedMemes = memes.map((meme) =>
      meme.id === selectedMeme.id ? selectedMeme : meme
    );

    updateMemes(updatedMemes);
    setIsModalOpen(false);
    triggerToast();
  };

  function triggerToast() {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

  // const triggerToast = () => {
  //   setShowToast(true);
  //   setTimeout(() => {
  //     setShowToast(false);
  //   }, 2000);
  // };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Meme Table
      </h1>
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in z-50">
          ✅ Meme successfully saved!
        </div>
      )}
      <div className="overflow-x-auto">
        <Table aria-label="Meme Table" className="min-w-full">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Title</TableColumn>
            <TableColumn>Likes</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {memes.map((meme) => (
              <TableRow key={meme.id}>
                <TableCell>{meme.id}</TableCell>
                <TableCell>{meme.title}</TableCell>
                <TableCell>{meme.likes}</TableCell>
                <TableCell>
                  <Button
                    className="w-full md:w-auto"
                    size="sm"
                    variant="solid"
                    onPress={() => handleEdit(meme)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {isModalOpen && selectedMeme && (
        <EditMemeModal
          isOpen={isModalOpen}
          meme={selectedMeme}
          onChange={setSelectedMeme}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default MemeTablePage;
