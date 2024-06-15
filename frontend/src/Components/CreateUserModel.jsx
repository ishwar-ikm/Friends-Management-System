import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    Textarea,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BASE_URL } from "../App";


const CreateUserModel = ({setUsers}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: "",
        role: "",
        description: "",
        gender: ""
    });
    const toast = useToast();

    const handleCreateUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/friends`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error);
            }

            toast({
                title: 'SUCCESS',
                description: "Friend added successfully.",
                status: 'success',
                duration: 2000,
                position: "top-center"
            });

            onClose();

            setUsers(prev => [...prev, data]);
            setInput({
                name: "",
                role: "",
                description: "",
                gender: ""
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
            <Button onClick={onOpen}>
                <BiAddToQueue size={20} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <form onSubmit={handleCreateUser}>
                    <ModalContent>
                        <ModalHeader> Add Friend </ModalHeader>
                        <ModalCloseButton />

                        <ModalBody pb={6}>
                            <Flex alignItems={"center"} gap={4}>
                                {/* Left */}
                                <FormControl>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input
                                        placeholder='John Doe'
                                        value={input.name}
                                        onChange={e => setInput({ ...input, name: e.target.value })}
                                    />
                                </FormControl>

                                {/* Right */}
                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input
                                        placeholder='Software Engineer'
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

                            <RadioGroup mt={4}>
                                <Flex gap={5}>
                                    <Radio
                                        value='male'
                                        onChange={e => setInput({ ...input, gender: e.target.value })}
                                    >
                                        Male
                                    </Radio>
                                    <Radio
                                        value='female'
                                        onChange={e => setInput({ ...input, gender: e.target.value })}
                                    >
                                        Female
                                    </Radio>
                                </Flex>
                            </RadioGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} type="submit" isLoading={loading}>
                                Add
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}

export default CreateUserModel
