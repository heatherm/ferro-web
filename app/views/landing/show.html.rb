class Views::Landing::Show < Views::Base
  def content
    row do
      columns do
        h1 "Let's make Bilbo dance!"
        p "First, the foundation for rhythms. Select two sounds"

        div do
          text "E(5,16) = Bossa-Nova rhythm necklace of Brazil."
          p class: "rhythm" do
            text "x..x..x..x..x...." #bossa nova 1
          end
          div class: 'button', onclick: "play(this);" do
            text "Play Bossa 1"
          end
        end

        div do
          p class: "rhythm" do
            text "x..x..x...x..x.." #bossa nova 2
          end
          div class: 'button', onclick: "play(this);" do
            text "Play Bossa 2"
          end
        end


        audio class: "snare hidden", autoplay: false do
          source src: audio_path('snare01.wav'), type: 'audio/mpeg'
        end

        audio class: "kick hidden", autoplay: false do
          source src: audio_path('kick02.wav'), type: 'audio/mpeg'
        end

        audio id: "container", autoplay:""

        # div class: "record-button button small", onclick: "recordNoise();" do
        #   text "Record for 1 second"
        # end
        # div id: "sound"
      end
    end

  end
end
