import {defineComponent, PropType} from "@vue/composition-api";

export default defineComponent({
    props: {
        optionalProp: {
            type: String as PropType<string>,
            default: 'test'
        },
        requiredProp: {
            type: String,
            required: true
        }
    },
    name: 'TestComponent',
    setup(props) {
        return () => (<div>
            {props.optionalProp}
        </div>)
    }
});
