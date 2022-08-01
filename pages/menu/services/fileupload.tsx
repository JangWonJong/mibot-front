import { ChakraProvider } from '@chakra-ui/react' 

import FileUpload from '@/components/menu/services/Gan/FileUpload'

function Main() {
    return (
        <ChakraProvider>
            <FileUpload />
        </ChakraProvider>
    )
}

export default Main