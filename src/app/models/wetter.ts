export interface Wetter {
location: {
name: string
};
current: {
temp_c: number;
condition: {
text: string,
icon: string
}
};
forecast: {
forecastday: [{
day: {
maxtemp_c: number;
condition: {
text: string,
icon: string
}
}
}]
};
}
