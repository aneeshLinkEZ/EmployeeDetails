import { Button } from '@rneui/base';
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateEmployeeDetails } from '../../slice/employee/employeeSlice';
import MyTheme from '../../theme/theme';


function EditDetails({ navigation, route }) {

    const dispatch = useAppDispatch();

    const details = route.params.item
    const [name, setName] = useState(details?.name);
    const [phone, setPhone] = useState(details?.phone);
    const [role, setRole] = useState(details?.role);
    const [team, setTeam] = useState(details?.team);
    const [email, setEmail] = useState(details?.email);
    const [company, setCompany] = useState(details?.company);
    const [place, setPlace] = useState(details?.place);
    const [gender, setGender] = useState(details?.gender);

    function updateDetails() {
        dispatch(updateEmployeeDetails(
            {
                id: details.id,
                employeeId: details.employeeId,
                name: name,
                phone: phone,
                role: role,
                team: team,
                email: email,
                company: company,
                place: place,
            }))
        navigation.navigate('ShowTeamDetails')
    }

    return (
        <ScrollView style={{ margin: 10, flex: 1 }}>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Id</Text>
                <TextInput
                    style={styles.textInput}
                    value={details.employeeId}
                    editable={false}
                    selectTextOnFocus={false}
                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Name</Text>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    onChangeText={(value) => setName(value)}
                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Phone</Text>
                <TextInput
                    style={styles.textInput}
                    maxLength={10}
                    value={phone}
                    onChangeText={(value) => setPhone(value)}

                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={(value) => setEmail(value)}

                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Company</Text>
                <TextInput
                    style={styles.textInput}
                    value={company}
                    onChangeText={(value) => setCompany(value)}

                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Place</Text>
                <TextInput
                    style={styles.textInput}
                    value={place}
                    onChangeText={(value) => setPlace(value)}

                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Team</Text>
                <TextInput
                    style={styles.textInput}
                    value={team}
                    onChangeText={(value) => setTeam(value)}

                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Role</Text>
                <TextInput
                    style={styles.textInput}
                    value={role}
                    onChangeText={(value) => setRole(value)}

                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1 }}>
                <Button
                    title={'Cancel'}
                    color={MyTheme.colors.button}
                    onPress={() => navigation.goBack()}
                />
                <Button
                    title={'Update'}
                    color={MyTheme.colors.button}
                    onPress={() => updateDetails()}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%'
    },
    textInput: {
        color: 'grey',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '90%'
    },
    leftSide: {
        width: '20%'
    }
})

export default EditDetails;
