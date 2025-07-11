import {Input} from "@/components/ui/input";
 
type LinkBoxProps = {
    action: (formData: FormData) => Promise<void>;
};
export function LinkBox({action} : LinkBoxProps) {
    return(
        <form action={action}>
            <Input name="content" type="url" placeholder="paste your link here!"/>
      </form>
    )
}