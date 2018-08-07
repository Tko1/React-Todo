import React from 'react';
import { StyleSheet, Text, View, Dimensions , TextInput, ScrollView} from 'react-native';

function FancyText(props)
{
    return <Text style={styles.fancyText}>{props.children}</Text>;
}
function TodoBox(props)
{
    return (<View style={styles.box}><FancyText>{props.text}</FancyText></View>);
}
function Hr(props)
{
    return <View style={ {height: "1%",width: "100%",borderBottomColor: 'black', borderBottomWidth: props.thickness,}}></View>;
}
function TaskList(props)
{
    return <ScrollView style= { {width: "100%"} }>{props.tasks.map(function(task, ind){
            return <TodoBox key={ind} text={task} />;})}</ScrollView>
}
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [ "Don't forget to feed Timmy" ],
        };
    }
     _onSubmitTask(event)
    {
        var text = event.nativeEvent.text;
        this.textInput.clear();
        this.submitTask(text);
    }
    submitTask(text)
    {
        this.setState({todoList: [...this.state.todoList, text]})
        //alert(text);
    }
   
    render() {
        return (
                <View style={styles.outerContainer}>
                
                <View style={styles.navbar}></View>
                  <View style={styles.innerContainer}>
                
                    <Text style={styles.todoHeader}>Todo</Text>
                    <Hr thickness={2.0}></Hr>
                    <Text>  </Text>
                    <TaskList tasks={this.state.todoList} />
                <TextInput style={styles.box} ref={ me => this.textInput = me } placeholder="Add task.." onSubmitEditing={(event) => {this._onSubmitTask(event);}} />
                    <Text></Text>
                  </View>
                </View>
        );
    }
}
var _width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#316CFF",
        height:"10%",
        width: "100%",
    },
    todoHeader: {
        fontSize:25,
        fontWeight:"200",
        fontFamily: "Roboto" ,
    },
    outerContainer: {
        flex: 1,
        backgroundColor: '#eaf2ff',
        alignItems: 'center',
        borderColor: "#FFB215",
        borderStyle: "solid",
        borderWidth: 10,
    },
    innerContainer: {
        backgroundColor: '#eaf2ff',
        alignItems: 'center',
        margin: "10%",
    },
    center: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    inputBox: {
        borderColor: "#FFB215",
        borderStyle: "solid",
        backgroundColor: "white",
        padding: "10%",
        width: 0.90 * _width,
        shadowColor: "black",
        
        borderWidth: 0.5 ,
    },
    box: {
        //borderColor: "#FFB215",
        //borderStyle: "solid",
        backgroundColor: "white",
        padding: "10%",
        width: 0.90 * _width,
        shadowColor: "black",
        
        //borderWidth: 0.5 ,
    },
    fancyText: {   
        fontFamily: "Roboto" ,
    }
});
