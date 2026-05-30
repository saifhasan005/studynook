"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { BiTrash } from "react-icons/bi";

function DeleteAlert({singleRoom}) {
    const {_id,roomName} = singleRoom;
    const handleDeleteRoom = async ()=>{
        const res = await fetch(`http://localhost:5000/rooms/${_id}`, {
            method: "DELETE",
            headers:{
                'content-type' : 'application/json'
            }
        })
        const data = await res.json();
        redirect('/rooms')
    } 
  return (
    <AlertDialog>
      <Button variant="danger" className={`rounded-md mt-5 mb-3`}><BiTrash/> Delete </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Room permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>Your Awesome Rooms {roomName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteRoom} slot="close" variant="danger">
                Delete Room
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
export default DeleteAlert;