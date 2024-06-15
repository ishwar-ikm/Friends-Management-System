import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BASE_URL } from "../App";

function EditModal({ user, setUsers }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: user.name,
        role: user.role,
        description: user.description
    })
    const toast = useToast();

    const handleEditUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/friends/${user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });
            const data = await res.json();

            if(!res.ok){
                throw new Error(data.error);
            }
            setUsers(prev => prev.map(u => u.id === user.id ? data : u));
            
            toast({
                title: 'SUCCESS',
                description: "Friend updated successfully.",
                status: 'success',
                duration: 2000,
                position: "top-center"
            });

            onClose();
            setInput({
                name: "",
                role: "",
                description: ""
            })
        } catch (error) {
            toast({
                title: 'There is an error',
                description: error.message,
                status: 'error',
                duration: 4000,
                position: "top-center"
            });
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <>
            <IconButton
                onClick={onOpen}
                variant='ghost'
                colorScheme='blue'
                aria-label='See menu'
                size={"sm"}
                icon={<BiEditAlt size={20} />}
            />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <form onSubmit={handleEditUser}>
                    <ModalContent>
                        <ModalHeader>Edit User</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Flex alignItems={"center"} gap={4}>
                                <FormControl>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input placeholder='John Doe'
                                        value={input.name}
                                        onChange={e => setInput({ ...input, name: e.target.value })}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input placeholder='Software Engineer'
                                        value={input.role}
                                        onChange={e => setInput({ ...input, role: e.target.value })}
                                    />
                                </FormControl>
                            </Flex>
                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    resize={"none"}
                                    overflowY={"hidden"}
                                    placeholder="He's a software engineer who loves to code and build things."
                                    value={input.description}
                                    onChange={e => setInput({ ...input, description: e.target.value })}
                                />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} type="submit" isLoading={loading}>
                                Update
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    );
}

export default EditModal;