const isDarkMode = () => 
    window?.matchMedia('(prefers-color-scheme: dark)').matches
    render(isDarkMode());