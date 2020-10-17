import {defineComponent} from "@vue/composition-api";
import TestComponent from "@/components/TestComponent";

export default defineComponent({
    name: 'App',
    setup() {
        return () => (
            <div>
                <TestComponent requiredProp={'123'}/>
            </div>
        )
    }
});
