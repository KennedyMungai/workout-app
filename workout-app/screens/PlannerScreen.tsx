import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Text, View, Button } from "react-native";
import WorkoutForm from '../components/WorkoutForm';


export default function PlannerScreen({ navigation }: NativeStackHeaderProps)
{


    return (
        <View>
            <WorkoutForm />
        </View>
    );
};