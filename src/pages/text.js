<motion.div
              className="col-span-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={leftVariant}
            >
              <Project
                title="2D SeaSavior Game"
                img={project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="https://visionary-snickerdoodle-039f3a.netlify.app/"
                type="Solo Project"
                github="https://github.com/Weekendend/2D-Game-JavaScript"
              />
            </motion.div>
            <motion.div
              className="col-span-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={rightVariant}
            >
              <Project
                title="Chess"
                img={project3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                link="https://www.youtube.com/watch?v=3HL7d-s5VCI"
                type="Group Project"
                github="https://github.com/shadizx/ChessPython"
              />
            </motion.div>
