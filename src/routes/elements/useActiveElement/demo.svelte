<script>
import { useActiveElement } from "./"

const active_element = useActiveElement()
</script>

<span>
    {$active_element ? $active_element.id : "No active element"}    
</span>

<input id="one"  placeholder="id: one" />
<input id="two" placeholder="id: two" />
<input id="three" placeholder="id: three" />
