console.log("Loading...");

//for 737max8 TUI, a320neo Iberia,a319 Finnair 787-10 etihad. These are the liveries that needs to be used respectively to make this addon work


let livObj = { "aircraft": [
  {
  "name": "Boeing 737 Max 8 (Jet Airways)",
  "livery": "1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_1.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Akasa Air)",
  "livery": "26.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_26.1.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (FlyDubai)",
  "livery": "2",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_2.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Aerolineas Argentinas)",
  "livery": "3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_3.jpg"
  },
 {
  "name": "Boeing 737 Max 8 (Alaska Airlines)",
  "livery": "4",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_4.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Turkish Airlines)",
  "livery": "5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_5.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Smartwings)",
  "livery": "6.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_6.1.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (United)",
  "livery": "7",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_7.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Malaysia Airlines)",
  "livery": "8",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_8.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Vietjet)",
  "livery": "9",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_9.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Ryan Air)",
  "livery": "10",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_10.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Ethiopian)",
  "livery": "11",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_11.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Iceland Air)",
  "livery": "12",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_12.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Royal Air Maroc)",
  "livery": "13",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_13.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Oman Air)",
  "livery": "14",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_14.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Flair)",
  "livery": "15",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_15.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Garuda Indonesia)",
  "livery": "16",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_16.jpg"
  },
 {
  "name": "Boeing 737 Max 8 (WestJet) by Github User 589",
  "livery": "17.2",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_17.2.jpg"
  },
 {
  "name": "Boeing 737 Max 8 (Com Air) by IUH Airways",
  "livery": "18.5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_18.5.jpg"
  },
 {
  "name": "Boeing 737 Max 8 (Air Canada) by Github User 589",
  "livery": "19.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_19.1.jpg"
  },
 {
  "name": "Boeing 737 Max 8 (American Airlines) by Github User 589",
  "livery": "20",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_20.jpg"
  },
 {
  "name": "Boeing 737 Max 8 (Australian Airlines) by Lachy your local Aussie",
  "livery": "21.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_21.1.jpg"
  },
{
  "name": "Boeing 737 Max 8 (Ukraine Intl Airlines) by IUH Airways",
  "livery": "22",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_22.jpg"
  },
{
  "name": "Boeing 737 Max 8 (Lion Air) by Luke",
  "livery": "23",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_23.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Caribbean) by IUH Airways",
  "livery": "23.5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_23.5.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Biman Bangladesh) by Ahnaf552",
  "livery": "117",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_117.jpg"
  },
    {
  "name": "Boeing 737 Max 8 (Air France) by FG AIRLINES",
  "livery": "119",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_119.jpg"
  },
    {
  "name": "Boeing 737 Max 8 (Eurowings) by IUH Airways",
  "livery": "132",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_132.jpg"
  },
    {
  "name": "Boeing 737 Max 8 (USAF) by FG Airlines",
  "livery": "133",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_133.jpg"
  },
   {
  "name": "Boeing 737 Max 8 (Air Baltic) by FG Airlines",
  "livery": "150",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_150.jpg"
  },
   {
  "name": "Boeing 737 Max 8 (PANAM) by FG Airlines",
  "livery": "156",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_156.jpg"
  },
     {
  "name": "Boeing 737 Max 8 (AeroItalia) by Luca",
  "livery": "161",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_161.jpg"
  },
  {
  "name": "Boeing 737 Max 8 (Southwest) by IUH Airways",
  "livery": "163",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_163.jpg"
  },
 {
  "name": "Boeing P8 Poseidon (US Navy)",
  "livery": "1.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing p8I Neptune_427352_3292/texture_1.1.jpg"
  },
 {
  "name": "Boeing P8A Poseidon (RAAF)",
  "livery": "2",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing p8I Neptune_427352_3292/texture_2.jpg"
  },
 {
  "name": "Airbus a320neo (Indigo)",
  "livery": "1.5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_1.5.jpg"
  },
{
  "name": "Airbus a320neo (Vistara)",
  "livery": "2.5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_2.5.jpg"
  },
{
  "name": "Airbus a320neo (Air Asia)",
  "livery": "3.5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_3.5.jpg"
  },
  {
  "name": "Airbus a320neo (Nepal Airlines)",
  "livery": "157",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_157.jpg"
  },
{
  "name": "Airbus a320neo (Gulf Air)",
  "livery": "1.6",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_1.6.jpg"
  },
{
  "name": "Airbus a320neo (Kuwait Airways)",
  "livery": "2.6",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_2.6.jpg"
  },
{
  "name": "Airbus a320neo (Egypt Air)",
  "livery": "3.6",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_3.6.jpg"
  },
{
  "name": "Airbus a320neo (Qatar Airways)",
  "livery": "4.5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_4.5.jpg"
  },
{
  "name": "Airbus a320neo (Spice 9)",
  "livery": "3.7",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_3.7.jpg"
  },
{
  "name": "Airbus a320neo (Scoot)",
  "livery": "4.6",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_4.6.jpg"
  },
{
  "name": "Airbus a320neo (Aegean)",
  "livery": "5.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_5.3.jpg"
  },
{
  "name": "Airbus a320neo (WIZZ)",
  "livery": "6.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_6.3.jpg"
  },
{
  "name": "Airbus a320neo (Azul)",
  "livery": "7.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871//texture_7.3.jpg"
  },
{
  "name": "Airbus a320neo (Airbus House)",
  "livery": "9.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_9.3.jpg"
  },
{
  "name": "Airbus a320neo (Air Astana)",
  "livery": "10.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_10.3.jpg"
  },
{
  "name": "Airbus a320neo (Iberia)",
  "livery": "11.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_11.3.jpg"
  },
{
  "name": "Airbus a320neo (Air Seychelles)",
  "livery": "12.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_12.3.jpg"
  },
{
  "name": "Airbus a320neo (VIVA)",
  "livery": "13.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_13.3.jpg"
  },
{
  "name": "Airbus a320neo (Cebu Pacific)",
  "livery": "14.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_14.3.jpg"
  },
{
  "name": "Airbus a320neo (LATAM)",
  "livery": "15.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_15.3.jpg"
  },
{
  "name": "Airbus a320neo (Plain)",
  "livery": "16.3",
  "mptx": "https://i.ibb.co/jVmZhQF/texture-16-3-1.jpg"
  },
{
  "name": "Airbus a320neo (SAS)",
  "livery": "17",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_17.jpg"
  },
{
  "name": "Airbus a320neo (JetStar)",
  "livery": "18.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_18.3.jpg"
  },
{
  "name": "Airbus a320neo (Spirit)",
  "livery": "21.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_21.3.jpg"
  },
{
  "name": "Airbus a320neo (Air cote d'ivoire)",
  "livery": "24.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_24.3.jpg"
  },
{
  "name": "Airbus a320neo (TAP) by Github User 589",
  "livery": "25.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_25.3.jpg"
  },
{
  "name": "Airbus a320neo (Lufthansa) by IUH Airways",
  "livery": "26.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_26.3.jpg"
  },
{
  "name": "Airbus a320neo (Easyjet) by IUH Airways",
  "livery": "27.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_27.3.jpg"
  },
{
  "name": "Airbus a320neo (SWISS) by Github User 589",
  "livery": "28.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_28.3.jpg"
  },
{
  "name": "Airbus a320neo (British Airways) by Github User 589",
  "livery": "29.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_29.3.jpg"
  },
{
  "name": "Airbus a320neo (Eurowings) by IUH Airways",
  "livery": "30.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_30.3.jpg"
  },
{
  "name": "Airbus a320neo (WOW) by Github User 589",
  "livery": "31.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_31.3.jpg"
  },
{
  "name": "Airbus a320neo (Sri Lankan Airlines)",
  "livery": "19.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_19.3.jpg"
  },
{
  "name": "Airbus a320neo (Vueling) by IUH Airways",
  "livery": "34.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_34.3.jpg"
  },
{
  "name": "Airbus a320neo (NEA) by IUH Airways",
  "livery": "35.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_35.3.jpg"
  },
{
  "name": "Airbus a320neo (ITA) by Luke",
  "livery": "36.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_36.3.jpg"
  },
{
  "name": "Airbus a320neo (Lufthansa old) by Github User 589",
  "livery": "37.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_37.3.jpg"
  },
{
  "name": "Airbus a320neo (China Eastern) by GT",
  "livery": "39.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_39.3.jpg"
  },
{
  "name": "Airbus a320neo (Frontier) by Github User 589",
  "livery": "40.3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_40.3.jpg"
  },
{
  "name": "Airbus a320neo (Aeroflot)",
  "livery": "66",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_66.jpg"
  },
  {
  "name": "Airbus a320neo (Aer Lingus) by IUH Airways",
  "livery": "73",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_73.jpg"
  },
   {
  "name": "Airbus a320neo (Qantas) by IUH Airways",
  "livery": "71",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_71.jpg"
  },
   {
  "name": "Airbus a320neo (Transavia) by IUH Airways",
  "livery": "68",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_68.jpg"
  },
  {
  "name": "Airbus a320neo (United) by IUH Airways",
  "livery": "110",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_110.jpg"
  },
    {
  "name": "Airbus a320neo (Geofs Air) by IUH Airways",
  "livery": "111",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_111.jpg"
  },
  {
  "name": "Airbus a320neo (IUH Airways) by IUH Airways",
  "livery": "112",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_112.jpg"
  },
    {
  "name": "Airbus a320neo (G-FS Alexander) by G-FS Alexander",
  "livery": "113",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_113.jpg"
  },
   {
  "name": "Airbus a320neo (Peak Air) by Sri Vamsi Rajesh",
  "livery": "118",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_118.jpg"
  },
   {
  "name": "Airbus a320neo (Pegasus) by ThatOneBestDoggo",
  "livery": "120",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_120.jpg"
  },
   {
  "name": "Airbus a320neo (ITA Born in 2021) by ThatOneBestDoggo",
  "livery": "122",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_122.jpg"
  },
   {
  "name": "Airbus a320neo (Oneworld Srilankan Airlines) by SriLankanflyer",
  "livery": "124",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_124.jpg"
  },
   {
  "name": "Airbus a320neo (Mihin Lanka) by SriLankanflyer",
  "livery": "126",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_126.jpg"
  },
   {
  "name": "Airbus a320neo (Air Ceylon) by SriLankanflyer",
  "livery": "128",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_128.jpg"
  },
   {
  "name": "Airbus a320neo (Air Lanka) by SriLankanflyer",
  "livery": "129",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_129.jpg"
  },
   {
  "name": "Airbus a320neo (Greenland Air) by BladesFlightsYT",
  "livery": "127",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_127.jpg"
  },
    {
  "name": "Airbus a320neo (Easyjet Europcar) IUH Airways",
  "livery": "135",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_135.jpg"
  },
   {
  "name": "Airbus a320neo (NEA Exeter) IUH Airways",
  "livery": "154",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_154.jpg"
  },
     {
  "name": "Airbus a320neo (Air Malta) SriLankanflyer",
  "livery": "158",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_158.jpg"
  },
     {
  "name": "Airbus a320neo (Thomas cook) IUH Airways",
  "livery": "160",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/airbus a320-214 (Easyjet)_427352_2871/texture_160.jpg"
  },
  {
  "name": "Airbus a220 (Breeze) ",
  "livery": "135",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Air Baltic  A220_230250_2899/texture_135.5.jpg"
  },
 {
  "name": "Airbus a220 (Air France) ",
  "livery": "136",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Air Baltic  A220_230250_2899/texture_136.jpg"
  },
{
  "name": "Airbus a220 (Korean Air) ",
  "livery": "137",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Air Baltic  A220_230250_2899/texture_137.jpg"
  },
{
  "name": "Airbus a220 (Air Baltic) ",
  "livery": "138",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Air Baltic  A220_230250_2899/texture_138.jpg"
  },
{
  "name": "Airbus a220 (Airbus) ",
  "livery": "139",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Air Baltic  A220_230250_2899/texture_139.jpg"
  },
{
  "name": "Airbus a220 (Jet Blue) ",
  "livery": "140",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Air Baltic  A220_230250_2899/texture_140.jpg"
  },
{
  "name": "Airbus a220 (Air Manas) ",
  "livery": "141",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Air Baltic  A220_230250_2899/texture_141.jpg"
  },
{
  "name": "Airbus a220 (Air Senegal) ",
  "livery": "142",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Air Baltic  A220_230250_2899/texture_142.jpg"
  },

  {
  "name": "Airbus a319 (Finnair)",
  "livery": "85",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_85.jpg"
  },
  {
  "name": "Airbus a319 (Latam)",
  "livery": "86",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_86.jpg"
  },
  {
  "name": "Airbus a319 (Turkish)",
  "livery": "87",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_87.jpg"
  },
  {
  "name": "Airbus a319 (Volaris)",
  "livery": "88",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_88.jpg"
  },
  {
  "name": "Airbus a319 (Air France)",
  "livery": "89",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_89.jpg"
  },
  {
  "name": "Airbus a319 (British Airways)",
  "livery": "90",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_90.jpg"
  },
  {
  "name": "Airbus a319 (Easyjet)",
  "livery": "91",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_91.jpg"
  },
  {
  "name": "Airbus a319 (Delta)",
  "livery": "93",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_93.jpg"
  },
  {
  "name": "Airbus a319 (Avianca)",
  "livery": "94",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_94.jpg"
  },
  {
  "name": "Airbus a319 (Air India)[livery by Spice9]",
  "livery": "92 ",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_92.jpg"
  },
  {
  "name": "Airbus a319 (Lufthansa)",
  "livery": "93.5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_93.5.jpg"
  },
  {
  "name": "Airbus a319 (Scandinavian)",
  "livery": "95",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_95.jpg"
  },
 {
  "name": "Airbus a319 (Swiss)",
  "livery": "96",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_96.jpg"
  },
 {
  "name": "Airbus a319 (TAP)",
  "livery": "97",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_97.jpg"
  },
 {
  "name": "Airbus a319 (Brussels)",
  "livery": "96.2",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_96.2.jpg"
  },
 {
  "name": "Airbus a319 (Airbus house) by Luke",
  "livery": "98",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_98.jpg"
  },
 {
  "name": "Airbus a319 (American Airlines)",
  "livery": "98.5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_98.5.jpg"
  },
   {
  "name": "Airbus a319 (BEA) by IUH Airways",
  "livery": "97.5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_97.5.jpg"
  },
   {
  "name": "Airbus a319 (Easyjet) IUH Airways",
  "livery": "97.6",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_97.6.jpg"
  },
 {
  "name": "Airbus a319 (Shiba&Co) by IUH Airways",
  "livery": "97.7",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Lufthansa%20A319-111_230250_3140/texture_98.7.jpg"
  },
{
  "name": "Boeing 787-10 (Vietnam Airlines) ",
  "livery": "41",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_41.jpg"
  },
{
  "name": "Boeing 787-10 (Emirates) ",
  "livery": "42",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_42.jpg"
  },
{
  "name": "Boeing 787-10 (United) ",
  "livery": "43",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_43.jpg"
  },
{
  "name": "Boeing 787-10 (Saudia) ",
  "livery": "44",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_44.jpg"
  },
{
  "name": "Boeing 787-10 (Eva Air) ",
  "livery": "45",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_45.jpg"
  },
{
  "name": "Boeing 787-10 (Plain) ",
  "livery": "46",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_46.jpg"
  },
  {
  "name": "Boeing 787-10 (Vistara) by Luke ",
  "livery": "64.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_64.1.jpg"
  },
  {
  "name": "Boeing 787-10 (Virgin Atlantic) by IUH Airways",
  "livery": "65",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_65.jpg"
  },
    {
  "name": "Boeing 787-10 (Air India) by Luke",
  "livery": "67",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_67.jpg"
  },
  {
  "name": "Boeing 787-10 (Scoot) by Luke",
  "livery": "70",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_70.jpg"
  },
  {
  "name": "Boeing 787-10 (Air France) by Luke",
  "livery": "74",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_74.jpg"
  },
   {
  "name": "Boeing 787-10 (Lufthansa) by Luke",
  "livery": "78",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_78.jpg"
  },
     {
  "name": "Boeing 787-10 (Biman Bangladesh) by Ahnaf522",
  "livery": "123",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_123.jpg"
  },
  {
  "name": "Boeing 787-10 (Vist Vietnam) by JadenAviation",
  "livery": "155",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_155.jpg"
  },
   {
  "name": "Boeing 787-10 (Air Vietnam) by JadenAviation",
  "livery": "156",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_156.jpg"
  },
  {
  "name": "Boeing 787-10 (Juneyao silk ribbon) by Burner7",
  "livery": "159",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (Etihad)_427352_3180/texture_159.jpg"
  },
{
  "name": "Boeing 787-9 (Thai Airways) ",
  "livery": "47",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_45.jpg"
  },
{
  "name": "Boeing 787-9 (Air Tahiti Nui) ",
  "livery": "48",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_45.jpg"
  },
{
  "name": "Boeing 787-9 (Virgin Atlantic) ",
  "livery": "49",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_49.jpg"
  },
{
  "name": "Boeing 787-9 (EL AL) ",
  "livery": "50",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_50.jpg"
  },
{
  "name": "Boeing 787-9 (Qantas) ",
  "livery": "51",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_51.jpg"
  },
{
  "name": "Boeing 787-9 (KLM) by GT ",
  "livery": "52",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_52.jpg"
  },
{
  "name": "Boeing 787-9 (Vistara) ",
  "livery": "53.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_53.1.jpg"
  },
{
  "name": "Boeing 787-9 (F1 Etihad) ",
  "livery": "54",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_54.jpg"
  },
{
  "name": "Boeing 787-9 (LATAM) ",
  "livery": "55",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_55.jpg"
  },
{
  "name": "Boeing 787-9 (LOT) ",
  "livery": "56",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_56.jpg"
  },
{
  "name": "Boeing 787-9 (Korean Air) ",
  "livery": "57",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_57.jpg"
  },
{
  "name": "Boeing 787-9 (Turkish) ",
  "livery": "58",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_58.jpg"
  },
{
  "name": "Boeing 787-9 (Norwegian) ",
  "livery": "59.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575//texture_59.1.jpg"
  },
{
  "name": "Boeing 787-9 (Air France) ",
  "livery": "60",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_60.jpg"
  },
{
  "name": "Boeing 787-9 (Aer Europa) ",
  "livery": "61",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_51.jpg"
  },
{
  "name": "Boeing 787-9 (Air Canada) ",
  "livery": "62",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_62.jpg"
  },
{
  "name": "Boeing 787-9 (American Airlines) ",
  "livery": "63",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_63.jpg"
  },
  {
  "name": "Boeing 787-9 (Lufthansa) by Luke ",
  "livery": "103",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_103.jpg"
  },
   {
  "name": "Boeing 787-9 (Gulf Air) ",
  "livery": "105.5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_105.5.jpg"
  },
     {
  "name": "Boeing 787-9 (TUI) by IUH AIrways ",
  "livery": "115",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_115.jpg"
  },
  {
  "name": "Boeing 787-9 (Japan Airlines) by FG Airlines ",
  "livery": "121",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_121.jpg"
  },
  {
  "name": "Boeing 787-9 (Finnair) by Burner7 ",
  "livery": "134",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_134.jpg"
  },
  {
  "name": "Boeing 787-9 (AI) by AI & Ahnaf552 ",
  "livery": "131",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing 787-10 Dreamliner (ANA)_427352_3575/texture_131.jpg"
  }
  ]}


//should work with URLs and livery IDs now
livObj.aircraft.forEach(function(e){
  var dropdown = document.createElement('li');
  dropdown.innerHTML = e.name;
  document.getElementsByClassName("geofs-aircraft-list")[0].appendChild(dropdown);
  if (e.livery.includes("https://")) {
  dropdown.setAttribute("onclick", 'geofs.api.Model.prototype.changeTexture(' + e.livery + ', 0, geofs.aircraft.instance.definition.parts[0]["3dmodel"])');
  }
  else {
      dropdown.setAttribute("onclick", 'geofs.aircraft.instance.loadLivery(' + e.livery + ')');
  }
})

  function updateMultiplayer(){
  Object.values(multiplayer.visibleUsers).forEach(function(e){
    a = e;
    livObj.aircraft.forEach(function(e){
      if (a.currentLivery == parseInt(e.livery)) {   geofs.api.Model.prototype.changeTexture(e.mptx, 0, multiplayer.visibleUsers[a.id].model);
      }
    })
  })
}

 mpRefresh = setInterval(function(){
   
updateMultiplayer();
}, 5000)

//add helper tags to compatible aircraft
document.querySelectorAll('[data-aircraft]').forEach(function(e){
   var elemName = e.outerText;
    if (elemName.includes("Airbus a320neo (Iberia) (by Spice_9)") || elemName.includes("Boeing 737 Max 8 (TUI) (by Spice_9)") || elemName.includes("Boeing 787-10 Dreamliner (Etihad) (by Spice_9)") || elemName.includes("Airbus A319 (Finnair)  (by GT-VRA)")) {
       e.innerHTML = e.innerHTML + " [Multiliveries Frame]"
    }
});

console.log("Loaded!");


//Add contributors here:
let contributors = ["Spice9","Github User 589","IUH Ariways","GT","Luke"];
let message = ""
setTimeout(function(){
  console.log("Code by Spice9 and AriakimTaiyo, livery contributions by:");
contributors.forEach(function(e){
  if (message === "") {
    message = message + e
  }
  else {
    if (contributors[contributors.length - 1] === e) {
      message = message + ", and " + e;
    }
    else {
      message = message + ", " + e
    }
  }
})


console.log(message)
}, 1000)
