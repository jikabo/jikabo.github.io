(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{W54S:function(t,e,i){},ZFP0:function(t,e,i){"use strict";var a=i("W54S"),o=i.n(a);o.a},ez0Y:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-layout-header",[a("q-toolbar",{attrs:{color:"grey-10",inverted:"ios"===t.$q.theme}},[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),t.leftDrawerOpen?t._e():a("q-toolbar-title",{staticClass:"text-center"},[t._v("\n        JiKaBo Catering Services\n      ")])],1)],1),a("q-layout-drawer",{attrs:{"content-class":"bg-grey-10"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("div",{staticClass:"q-py-xl text-center",attrs:{id:"logo-box"}},[a("img",{attrs:{alt:"Jikabo logo",src:i("zwU1")}}),a("p",{staticClass:"text-white"},[t._v("Catering Services")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-9"},[a("q-list",{attrs:{"no-border":""}},[a("transition-group",{attrs:{appear:"",mode:"out-in","enter-active-class":"animated lightSpeedIn","leave-active-class":"animated lightSpeedOut"}},[a("q-item",{key:1},[a("q-item-main",[a("div",{staticClass:"nav q-display-1 right text-brown-6",on:{click:function(e){t.clickHome()}}},[t._v("Home")])])],1),t.shouldShowLink?a("q-item",{key:2},[a("q-item-main",[a("div",{staticClass:"nav q-display-1 right text-brown-6",on:{click:function(e){t.scrollToSection("gallery")}}},[t._v("Gallery")])])],1):t._e(),t.shouldShowLink?a("q-item",{key:3},[a("q-item-main",[a("div",{staticClass:"nav q-display-1 right text-brown-6",on:{click:function(e){t.scrollToSection("about")}}},[t._v("About Us")])])],1):t._e(),t.shouldShowLink?a("q-item",{key:4},[a("q-item-main",[a("div",{staticClass:"nav q-display-1 right text-brown-6",on:{click:function(e){t.scrollToSection("contact")}}},[t._v("Contacts")])])],1):t._e()],1)],1)],1),a("div",{staticClass:"col-3"},[a("q-list",{attrs:{"no-border":"","inset-delimiter":""}},[a("q-item",{staticClass:"package-link"},[a("q-btn",{staticClass:"full-width",attrs:{square:"",icon:"child care",color:"red-10",size:"xl"},on:{click:function(e){t.$router.push("/christening")}}})],1),a("q-item",{staticClass:"package-link"},[a("q-btn",{staticClass:"full-width",attrs:{square:"",icon:"cake",color:"red",size:"xl"},on:{click:function(e){t.$router.push("/birthday")}}})],1),a("q-item",{staticClass:"package-link"},[a("q-btn",{staticClass:"full-width",attrs:{square:"",icon:"local_play",color:"orange",size:"xl"},on:{click:function(e){t.$router.push("/party")}}})],1),a("q-item",{staticClass:"package-link"},[a("q-btn",{staticClass:"full-width",attrs:{square:"",icon:"local_florist",color:"deep-orange-10",size:"xl"},on:{click:function(e){t.$router.push("/debut")}}})],1),a("q-item",{staticClass:"package-link"},[a("q-btn",{staticClass:"full-width",attrs:{square:"",icon:"favorite",color:"deep-orange",size:"xl"},on:{click:function(e){t.$router.push("/wedding")}}})],1)],1)],1)])]),a("q-page-container",[a("transition",{attrs:{mode:"out-in","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("router-view",{key:t.$route.fullPath})],1)],1)],1)},o=[];a._withStripped=!0;i("f3/d");var s=i("4IOb"),n=s["E"].getScrollTarget,r=s["E"].setScrollPosition,l={name:"LayoutDefault",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},computed:{shouldShowLink:function(){return"index"===this.$route.name}},methods:{scrollToSection:function(t){var e=document.getElementById(t),i=n(e),a=e.offsetTop-e.scrollHeight,o="about"===t?800:650;r(i,a+o,1e3)},clickHome:function(){"index"!==this.$route.name&&this.$router.push("/"),this.scrollToSection("home")}}},c=l,u=(i("ZFP0"),i("KHd+")),d=Object(u["a"])(c,a,o,!1,null,"0b45e491",null);e["default"]=d.exports},zwU1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAABQCAYAAAC6RPH0AAAT5ElEQVR4nO2defQdRbHHq1mURWVNgBeChBA2gYcgJihbZA2rhBcwqOzC47GIbLJqZE+Al4CKiITFwOGxBQVEZHkhCAjIjuyQQAJJCCGBJECQcD/+UT3e/vXtWe/cXxJOf8/p8zu/meqq6rkzPdXVVTUiERERERERERERERERERERERERERERERERERERERERERERERERERERERGLFoCeC1qHiIhOwtTFCDhARA4VkXVEZJKIPCUi40XkExGZYox5uC5ZERGLNIANgJuBRk4bC+zazbqNBB4LtL/UKGM3h+/FwFJ18Y74HALYE3iuwAPjthFAj27S744UHX5VE/9DgZmW58l18FwQAH4GnAL0WtC6fK4BDAGmBW7Ix+2D8T3gAOBY4DaP5r5Or32ApYCXUx6aY2rgf4blNc2aposs7OQyY0E+NMBXgF5AH2A9YE1g+QWlT+0AhjozrNsuAFYL0C8J/MWjPbWkzJ2A9UvQb5TxthtURrbH90vAry2fp4Adq/JaGACsBkwFnugQ/1WATYCdgQOBE+2keqWdTB+01sokYBbwETAfmAtMtufGA8OBwYvk2xDYCnjTuwnnAYfn9DvH63NHCZn/Y/tMBk4s2GdwygPzIbB2Udkez7XRtVkDuBPYqAqfhQnA7nY8rwMrVOi/GvANYA/gCOBs4Co7ST4LvJsxeVVpk4HT6SYTP4QlyhADa4nI+SLS2zk8W0SONsaMyek+3/u/5Y2UInN/ERll/+0lIsOBfsaYw3K69ks5/qox5rUisj09thKR4SIyQESuEpGfGmNmlOWzEGKA/dtHRK4CbhORF0XkAxFBRJYWkRVt6ykiq4rIKqK/RdJW7EZ9e4nImSIyGDjXGHNzN8ouB+CLwI2BJ/+ogv0v9/q9Cnwxp88hwMcBmeMKyLsiZaa6qeiYHV5DgIm2/1ll+y/MAMbV/CbozvYesF93X7Myb5pTReS/vGMjjTFFPVGrev9/ZlsQwLEi8r+BUzNEZGQBealvmgJ9XT2OFpERom/Ko4wxl5bpvzDDmpff6iZxs0Vkum3vishM296z52aLyBwR+VRE/ikiy4nI8rZtLiL9ReSrHs8VROQXwJPGmJe6YQzFAfSndeF/ByX2JIC/e/2fzqC9IWVmeRrYrYCsHsCUFB4HldD5XNvnFWCvov0WFQD/XdOMPw+YgC7qbwQuAU4FDgZ2ATYFVifHssjRdQXgR6h31pf/2zqvSy0Arg0oukuJ/sujCzi3/90Z9HsADzm0M9CNykLeM+BbGT/wlgX690C9Ow3UczMgr8+iCGAb1IydkHG9PkG9a8+iWwXXARcCx6Fe1G2AfsCy3aTzSsDvPB1fB1bqDvmFAHw/cCEvK8ljPeBTj0em4wB1U38H9daV8lKh+0OhG2AasEpO342AP1v6/wN8k+BzB2A5YAtgB+C79u2wPeoV6wesvKB1dIHuwV3j/bZ7LGi9/g3Uteoq936Fm3jnwA18Rgd1PjvloflrTr8d0b2Xhn2zfaGDOq5pb86vdUrGoghgyYJ03wY+c37bgzutW4JMRwCwnYjs7B2+3RjzXEk5oRuj1IK8JEo7AVDX9ghRt+rJxpgRnVDMyjpFRH5sZQFcbIw5rgNy1hPdHljBtvmiC+/3RORRY8w/65ZZA8YAi4nI8caYyWlExpiHgOtFJPGeLbB9my4AhgVm6yEV+FwZ4LNpJ3S28p5MedME48OAk+z5t4EfdEovK+u4FN22qon/rvYt+QC6u562VnkOXRt8tw65dcD5HcYWpD/XGc8hndavEKxN717oJ6ngAQEe9fhMAL6cQrss4Luny8haC5iTcqPs7dEuaW+wBuqV2a6q3IK6fZP0HfIT2uR9MHBXxkOS1f4EDK1rnBX13wrdd2kA5xTsc6Qzhm5b0+Tt0/iv74nGmE/KCAD6Sqt59ooxZk6AdmMRuVRE+qDOhruNMY+WkSdqmqV5cv5tngFriO7w7ysifxLd4X+hpKyyOEJE0rw8/1mFIbCFiJwgInuJyFQRuV5ExklzP2Rx0eiL1URkCxEZJCJf8dgMEpFBltf5xpgpVXSpCmAZETlF1IQUEWkU7Lq4Q/923XpVAnCMNyPdW4HHHoGZrWW9ACwD/DFA+5uS8o5KmU1fAZa2NN8E7rfHL6dCzFVZAANzZvuHKvA8AXXHvwecSYFgRmB91ERMczM/Rk2mYlGgwZiFPatOv8ThU1t+VC2g1UTzowLy+p8R+GH2CdBdZM9N92g/okSAJZoIFjRB7Pk9gZec42eWGU9V0Ooi9dtUSgQhOjfMfcDmFfTZgNb9jqS9Rol9uHaARj778j+1b728vsleXqEg3m4DsCpdY86eBjYs0d+3sz9ATTaX5gh77gF0n8C/iIXdsrS6yJM2CjjcynePv0zO3k27ALZz5N1JuqOif0F+v7L0Y2lzH8netO8EdJkI+J7TPF5roK7gQgGclnYy8A9ac5/uBHwz0u17sKV7kG6wFEoD3dEf5QzoloL91gFmexfjPo9mG9TEuAc1Hfb16N8uOgMDS6OBoKEbMuQJTFrbSWk5ev3eynnEjjEtfOV7BXgl3rcHCOQuVdRvB+CZgD6vAdsU5PEz1EoYX2QSQvNs/h8Nwdkb2D8g/9oQL3vP/MPSLDTevyDQnfZxJR6agwIXYrhHcwpwE5p2IMBPPPrUcJuAvI0zHoys9hCweL6E8kB31pOH/9v22GL2pvf1yEzMAwbZSehd4Ds16zmA1vjABrrZm7k9QDN36QNgYEF5iWl4vHNsVED+g2i0+ybA5sDxwIto9HteesiiB8I2c+Y+Dxrs59KHIp3T+u6d8WBMIGw/J60jIeY04/bO8Y5fF9Dhihxeien58w7puin6NvT1Gg/0yeh3lqX7dUE5p4bogS/TTPLLaq8D3293vBn6rWwngpFo8PADwL10ujAM6g17wRvsm+THft3t9flhCZknp1zkp+0NYYCHU2j+2P6oW/TZ0fKeDPTzzvkeowae6erRJxPCJLw1Yc069ydsqt0MfCmlT5L+vXfovEc71NLeRWDtA/Sla7Cu2+ajjp516hhrQPauwNXAGynyO5sWQtMscds1OX160DUa+iM0FKSozNEpg73JoTkhYwbbqZ0xB/RJ3iYtiWuEXeMTSd/0/YOluahOHVNkbUt4bRh0/9P0kGbWS0CDQidY3t/IoFsbNdkTuZNQ58e2bQ4tTd4hFNsYPk6kZLpzSYQuYF7G5ddF01kT/L1kclGRmLNbRTcDQ9Vw9hGRWnz+9gEcKiKTReTqAMlbgWNfFZG1ROQZj1cfEdna/lt2s7c0jDH32xvkamluOIqIHA68Y4wZ5nV5x/7dWESCa1BgdRE5T3SM+xljHg/Q9BKRdW17SkReF5HFpJm8NqvikIIAdhCRo0Rkd3voGdHr+5KVNUtEPhSRpUST4TpSfCRRZlla66FNB9bM6fdTr0/hoEmgJ7rXEZohDvJoL02hmwtsVnHYvj7XW56/SDm/WYoOLcluND2KM/OuYZ2g6db122Ee3cb22k0isDGKmsVjbN+TnON90FTy4eiaYUbOTP8xcCttRjSjqQUXoObeHNS8HAD0tvfg5eh6/Oh25JRVKrQgv7FAv5u8PoXdiajPP+1ib+nR7pBB23Z0M+rlSsyt4ALaPuSh/ZGWaGeaG7/PtqtbWdAMonTbTLxFMc1s21dRj+j62DUQmrTWAH6JemAvtA/JrJyHJKtdVmUCQfOlElN3DHZjGI1+mRCQU8i50TYIe82OyOnTA52pXDu2zA55mmcsmHhGug37Ju1vGCZRFJleLsKpuy01F2hGE4xvR6+qIOwKfg7YxKHZla5R1fPtpPFsGw9GXrubEsG9wF4093eG2WNL0Fr0xW/7duCydlGsF62pzW+jAZJZ/Xb3+lxfUq5fVy1pwcQzNDog7SKdFOpTUI9dLI/X8x4+mjOe2+4M0CUVSv9QVa92gG4a3xLQ9S6ciY1072WZNhfdL7oJNaFOR13avyUcSfH7gmMYTDNE6xjn+GX22BVopvBAWqMTSsU/lgbqifAHllv4gK65EQ3gyJJyQ+WlGsCVKfQ90SDOUJ8nqJjz7uiRm5mKmiu+7JfwMkaBv9pzD1TRqQ6gac9+ikcDGO3RnZVyTdPaBPtAno7GBabGGQJfQNdAT3s8MtMaLN9kvXueczzxYF7o0Z/n8e9sQCit65IGBXId0J3fhH4eanveTsGkMJppyn47JaNPaK8kaaUXm+gXBBqoXd+7AH1ovfAJsK5Hd68997L/QHUn0Jk4VOXnbI/uR/a4XxfiHeBvaFLij1HX9nIV9OhLM0q9AdyaQbs98Jalc7celkBNtTvwJkjg557eV5fVscxgtkBtWVfgo2j6ala//v6TDfzGzg659QjsRZybcvOnRmWjHhNf38qzizNhnFaQfr8U2YM8umSRPQt13S4wkF605Gh7fiD6Bp+GpoVsaR+OTakxMBZ1/CRJa7MJmMJosHHylv4Q2No5l4RctZQEo9W7em5deocGckHgYhYxU070+pxm/xYqkk64cEfSMpO7CL8ZC78hHT7JmuwlChbpRrMVQ3KP9OjcH7Gzi9ICQE0pX+eP7STwGupda0n/6IAe7mZ2S9FD77qd751bHbg2ha8fKb97iK6OAayGLn5dYfMoUAuA1tCZBhrvE9wdD/Q/OuXmexXNCszqOzSlbwO4rsT4k4VyqjkY6NOHcGq2b2O764TM+LTuQmA2bqDVYWZSIFq7Jh32d2QP8c4d5pybSmCtRCClANiQrqWQH6NDwbyC2qj+RczNwEOzKEuZVQEefpBn0lo8UYG+S6EL/1D/+aEZLMBjT0v/AiXC9VG7+sWA3LEenfsmfZM2aijUBfR7MrcGdH+WgnlBNejg7rdt6xxfka7u/EtK8PQn4JYEt8y1RglBy4pIKOq0SLHxULzXFSWrwVeu22yMmSciadVPFhOtIZCHA+3fa4wxUwvQJ7Lni4bZ+FjL+/8haY6lt4h03051Cowxs0XkRBHxv6W6oYhcQo5ZXBOSMLCGNEN5REQOExHXwil0L6EfkTrQOTRORAo/cKVAeM8jt54A6kL0N/imA18vIXtZ1I4OvSmKftFgA8IfqWqgC9rUqFq6Zpr+uUILuXFn4+1209V+n0vB5LBOgmZiX+iLc+OzrltN8hMT7Hma0Qe96bqzf08Jfsc6/T4D9uyU4kvR9FC4LfMjT7bvkEC/Ujn7aHJS2pqkcNQy6RHSDTKcGYQ3KOtoAz05O3nnx5ISqt9poGVsk03Bu1BX9MTAGMZRIjW+gh5JnYSRzjE/8bFQJVd0LeNOvpU3uIsIOzZwsf6GrfyS09f/FufzwH+UlB968BroAts3c7L47JbCp4H680O5H0nG4hto0fUqLS1mrqX4XeDBHk2OO79uAOvSrBp0ObbwOPrGDQVcPkxNQbCeHj1prgcHOcf95L5tC/Ib4/S5uG59XUFrEn4156ahonFAfr/SGYk0swD99mQFXuMyHpyW2DnnoQ9GMheU2YvmfoPbWgrmoftKvrftl1VlV9B1P5qxZKcHzv8Q9Zj6Y3mcAtVlSuqSOJ6ucY6tTtcg2CkU+JoAXZ1Yoykw4bejeCgM5EEK7FrTWujiXUp8iNbhc1XKTX5DBV5+nTe33e/RJpHcE8lIBS4oN+S9C8beEfZSXklObF+b+vVyfutX0brXabQHEf563fPUVAUT2Bp9u7+Ns/5Fv3LgyszNfwH2cR70S+mUe9kKOyDl5iqcu20Vvs0OvtJsTdfwG7ednd+7hVdvWj/C67YhDu3t9tiwKnp7ckPBkI9k0PuxUQ3UoVD5q9UZsobSLLhxHQXWKBkPzhwKOmcyePdDzf8G3rqZ1qDfzKRHNFLhDUs7Kos2T6kj0ND+1NRVdFEaurky05kz+FX60CkaJhHKSWkAB1TkGQqDT9rNliZZR02kzbeM5XdRQNZ0MvZjCL9h56K5KhvXoNNQmukTUylZ5gr9rlFaUuDFVPjCNlo/7n7L49jAeT9pLrUmBWopTLQPd3tfbECLYSdCLwe2987vQzg6eAod/BJAiq5pYSgNCmxKpvDcOoNnA42tSq7RsJrGkRbRkDkGwtVLG+gaaRQ6k5b5xONGaOSvm2v0OzLy+XP47URrBm/SXrHjTi0I6PBZCa33NstODMFi8Wg9NF+OXwWop71uc1BHwuAqY/MFHxkQ/KC9eGnVKxvAoW0LL69rWjruFNr4zjytXj233UONbxkrzzcrkpZr6qIzelqBxAa6lhiNFijcB91F3wyNxNgNTeU4DQ1lchfxY6mh0Ajqyk37hmoDjaK4EH2LrIdGGqwIfM3qOoJmGeFMExQtQBhaH96CuqevoplWMJo6P6iFxvRMyxio34bnc60fqG0/IdDaynBEs0BDfCeg2YnTqOktY+VtlCKr6B5DbzSIMm2Tt2h7z95MtQcookX+QqWh3PYpzQW+e3ySvelznR2oBy9LxiN0qmaafcrvzVGgQYlifh3Qcem01kHeK6PmQuUvFZeRV5LHGmjE+M00c0jy2lvoBu3JlCiXVQXoG+QnqPn3fo5eH6Nla8+k5PoHfaM+jqYDfIqagjegBUoKfZ4wCyZH+DKi5Y5+ICK+4tNE5DJjTLdU3Y8oB3QB3F+6fj5wRRGZI/r5wJki8pqIPGGMmb4A9OsrIgNEP/uX6Pa+o9vj7X4vCC3QuITod5XmtadxE5kPjSN8FRHZW0T6itZ/ekVE7qzw7c2IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiEUI/wLAjckGVYAgaQAAAABJRU5ErkJggg=="}}]);