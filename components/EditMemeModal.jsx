"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import Image from "next/image";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

const isValidImageUrl = (url) => {
  return /^https?:\/\/.+\.(jpg|jpeg)$/i.test(url);
};

const EditMemeModal = ({ isOpen, onClose, meme, onChange, onSave }) => {
  if (!meme) return null;

  const isValid =
    meme.title.trim().length >= 3 &&
    meme.title.trim().length <= 100 &&
    isValidImageUrl(meme.image.trim()) &&
    Number.isInteger(meme.likes) &&
    meme.likes >= 0 &&
    meme.likes <= 99;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent className="z-50">
        <ModalHeader>Edit Meme</ModalHeader>
        <ModalBody className="flex flex-col gap-4">
          <Input
            label="Title"
            value={meme.title}
            onChange={(e) => onChange({ ...meme, title: e.target.value })}
          />
          <Input
            label="Image URL (.jpg або .jpeg)"
            value={meme.image}
            onChange={(e) => onChange({ ...meme, image: e.target.value })}
          />
          <Input
            label="Likes (0-99)"
            type="number"
            value={meme.likes}
            onChange={(e) =>
              onChange({ ...meme, likes: parseInt(e.target.value, 10) || 0 })
            }
          />
          {
            (meme.image && isValidImageUrl(meme.image),
            (
              <Image
                alt="Preview"
                className="mt-4 rounded-lg object-cover w-full h-40"
                height={250}
                src={meme.image}
                width={250}
              />
            ))
          }
        </ModalBody>
        <ModalFooter className="flex justify-end gap-2">
          <Button isDisabled={!isValid} onPress={onSave}>
            Save
          </Button>
          <Button variant="ghost" onPress={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditMemeModal;
