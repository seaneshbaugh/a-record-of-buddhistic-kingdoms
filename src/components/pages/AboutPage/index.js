import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/PageTemplate";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import styles from "./index.module.css";

const subtitle = "About";

class AboutPage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={subtitle} />;
    const content = <main className={styles.content}>
                      <p>
                        Namo tassa bhagavato arahato sammāsambuddhassa.<br />
                        Namo tassa bhagavato arahato sammāsambuddhassa.<br />
                        Namo tassa bhagavato arahato sammāsambuddhassa.<br />
                      </p>
                      <p>In November of 2017 I found myself travelling down a <a href="https://en.wikipedia.org/wiki/Wiki_rabbit_hole" target="_blank" rel="noopener noreferrer">Wikipedia rabbit hole</a>. It started with the life of the Śākyamuni Buddha. Despite living in the United States, a decidedly non-Buddhist country, I had somehow over the years absorbed through popular culture a rough outline of the Buddha's life. My recent introduction to vipassanā meditation aroused an intense curiosity and a vague notion about the historic Buddha was no longer satisfactory. My initial research led me to the entry for Kapilavastu, the region where the Buddha grew up. From there I came across the monk Xuanzang and then Faxian. I was already familiar with the fictional story &quot;Journey to the West&quot;, but I never knew it was based on Xuanzang's travels. For some reason though Faxian jumped out at me. I suppose perhaps because he made the journey through central Asia first.</p>
                      <p>The most readily available translation of Faxian's &quot;A Record of Buddhistic Kingdoms&quot; is by James Legge so naturally that's what I downloaded first. Immediately, within the first paragraph I was confused. I was sort of familiar with Pinyin and the now disvavored Wade-Giles romanization. Legge's romanization of Chinese names and places was similar to Wade-Giles but not quite the same. In retrospect that makes sense since he was translating at a time before Wade and Giles had formalized their romanization scheme. I did some research and was able to find the modern day location for Chang'an and then did the same for the other places in the first chapter. I started out by keeping the modern places in a text file but quickly found it to be unweildy and insufficient. There were just too many places and the classical Chinese names romanized using a method that pre-dated what I had always assumed the out-of-date method made it a confusing mess. My simple text file was replaced with a spreadsheet and a Google map.</p>
                      <p>After doing some more digging I found a Google map made by someone else that nudged me in the write direction for many places mentioned in Faxian's narrative up to Jalalabad, Afhghanistan. It took a great deal of time but I was able to refine the locations for the first leg of Faxian's route. Obviously there's a lot of conjecture (read: &quot;total guesswork&quot;) involved, but I'm fairly certain that the locations I've marked are very close.</p>
                      <p>On December 12th, 2017 I discovered Scrivener 3. One of the things I had noticed while researching Faxian's route was that the only version of Legge's translation that preserved all of the formatting and diacritics of the text was the scanned version on archive.org. But that just consists of a series of images, not actual text. Having come across Scrivener I got it in my head that maybe I could transcribe the original text with all the formatting. The initial process took until the middle of February 2018. At that point I took a break until October 2018 and for the next month edited and quality checked my transcription. In the intervening time I mulled over how I wanted to share what I'd done. A PDF with all of the original text was the obvious solution, but anyone who came across it would quickly run into the same confusion I myself had encountered. On November 5th, 2018 I started work on this website with the intent to distribute the original text as well as supplimental information about all of the people, places, and Buddhist concepts found in the text.</p>
                    </main>;
    const footer = <Footer>TODO: Footer content goes here.</Footer>;

    return (
      <PageTemplate
        header={header}
        content={content}
        footer={footer}
      />
    );
  }
}

AboutPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default AboutPage;
