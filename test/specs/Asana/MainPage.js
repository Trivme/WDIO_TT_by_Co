import Page from './Page'

class MainPage extends Page {

  open(path) {
    super.open('https://asana.com/');
  }

  get h1() {
    return('//h1');
  }

  get whyAsanaBtn() {
    return $('//span[contains(text(),"Why Asana?")]');
  }

}
export default new MainPage()