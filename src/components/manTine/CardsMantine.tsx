import {Image, Text, Avatar, Badge, Card, Center, Grid, Group, useMantineTheme} from "@mantine/core";
import React from "react";

export const CardsMantine: React.FC = () => {
    const theme = useMantineTheme()
    const linkProps = {href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer'};

    return <Grid justify={"flex-start"} align="stretch">
        <Grid.Col style={{maxWidth: 350}}>
            <Card withBorder radius="md" style={{border: "2px solid brown"}}>
                <Card.Section>
                    <a {...linkProps}>
                        <Image src="https://i.imgur.com/Cij5vdL.png" height={180}/>
                    </a>
                </Card.Section>

                <Badge variant="gradient" gradient={{from: 'yellow', to: 'red'}}>
                    outstanding
                </Badge>

                <Text fz="sm" c="dimmed" lineClamp={4}>
                    Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very
                    different direction to its predecessor, namely the fact that this time round instead of
                    fighting against various mutated zombies, you’re now dealing with more occult enemies like
                    werewolves and vampires.
                </Text>
            </Card>
        </Grid.Col>
        <Grid.Col style={{maxWidth: 350}}>2</Grid.Col>
        <Grid.Col style={{maxWidth: 350}}>3</Grid.Col>
        <Grid.Col style={{maxWidth: 350}}>4</Grid.Col>
    </Grid>;
}