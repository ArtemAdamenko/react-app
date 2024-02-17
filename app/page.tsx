import {Htag} from "@/components/Htag/Htag";
import {Button} from "@/components/Button/Button";
import {P} from "@/components/P/P";
import {Tag} from "@/components/Tag/Tag";

export default function Home() {
    return (
        <main>
            <div>
                <Htag tag='h1'>Text</Htag>
                <Button appearance="primary" className="test" arrow='right'>My Button</Button>
                <Button appearance="ghost" arrow='down'>My Button</Button>
                <P size={"l"}>Large</P>
                <P size={"m"}>Medium</P>
                <P size={"s"}>Small</P>
                <Tag size={'s'}>Small tag</Tag>
                <Tag size={'m'} color={'red'}>Medium tag</Tag>
                <Tag size={'m'} color={'grey'}>Medium tag</Tag>
            </div>
        </main>
    );
}
